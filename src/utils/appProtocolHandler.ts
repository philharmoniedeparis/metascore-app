import { net, protocol } from 'electron';
import { normalize, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createReadStream, type ReadStream } from 'node:fs';
import { lstat } from 'node:fs/promises';

// Mostly borrowed from https://github.com/laurent22/joplin/tree/8fb7d194d5f29df69d575c957f05c1c9b08c6ec5/packages/app-desktop/utils/customProtocols

/**
 * Replace all relative URLs to absolute URLs in a CSS stylesheet.
 *
 * @param css The CSS
 * @param base_url The base URL
 * @returns The CSS with the URLs replaces
 */
const replaceCssUrls = (css: string, base_url: string) => {
  return css.replace(/url\((['"]?)([^'")]+)(['"]?)\)/gm, (match, opening, url, closing) => {
    let absolute = false;
    try {
      new URL(url);
      absolute = true;
    } catch (e) { /** */ }

    if (!absolute) {
      try {
        url = new URL(url, base_url).toString();
      } catch (e) { /** */ }
    }

    return `url(${opening}${url}${closing})`;
  });
}

// In some cases, the NodeJS built-in adapter (Readable.toWeb) closes its controller twice,
// leading to an error dialog. See:
// - https://github.com/nodejs/node/blob/e578c0b1e8d3dd817e692a0c5df1b97580bc7c7f/lib/internal/webstreams/adapters.js#L454
// - https://github.com/nodejs/node/issues/54205
// We work around this by creating a more-error-tolerant custom adapter.
const nodeStreamToWeb = (resultStream: ReadStream) => {
  resultStream.pause();

  let closed = false;

  return new ReadableStream({
    start: (controller) => {
      resultStream.on('data', (chunk) => {
        if (closed) return;

        if (Buffer.isBuffer(chunk)) {
          controller.enqueue(new Uint8Array(chunk));
        } else {
          controller.enqueue(chunk);
        }

        if (controller.desiredSize <= 0) {
          resultStream.pause();
        }
      });

      resultStream.on('error', (error) => {
        controller.error(error);
      });

      resultStream.on('end', () => {
        if (!closed) {
          closed = true;
          controller.close();
        }
      });
    },
    pull: (controller) => {
      if (closed) return;
      resultStream.resume();
    },
    cancel: () => {
      if (!closed) {
        closed = true;
        resultStream.close();
      }
    },
  }, { highWaterMark: resultStream.readableHighWaterMark });
};

// Allows seeking videos.
// See https://github.com/electron/electron/issues/38749 for why this is necessary.
const handleRangeRequest = async (request: Request, targetPath: string, mime?: string) => {
  const makeUnsupportedRangeResponse = () => {
    return new Response('unsupported range', {
      status: 416, // Range Not Satisfiable
    });
  };

  const rangeHeader = request.headers.get('Range');
  if (!rangeHeader.startsWith('bytes=')) {
    return makeUnsupportedRangeResponse();
  }

  const stat = await lstat(targetPath);
  // Ranges are requested using one of the following formats
  //  bytes=1234-5679
  //  bytes=-5678
  //  bytes=1234-
  // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range
  const startByte = Number(rangeHeader.match(/(\d+)-/)?.[1] || '0');
  const endByte = Number(rangeHeader.match(/-(\d+)/)?.[1] || `${stat.size - 1}`);

  if (endByte > stat.size || startByte < 0) {
    return makeUnsupportedRangeResponse();
  }

  // Note: end is inclusive.
  const resultStream = createReadStream(targetPath, { start: startByte, end: endByte });

  // See the HTTP range requests guide: https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests
  const headers = new Headers([
    ['Accept-Ranges', 'bytes'],
    ['Content-Length', `${endByte + 1 - startByte}`],
    ['Content-Range', `bytes ${startByte}-${endByte}/${stat.size}`],
  ]);
  if (mime) headers.set('Content-Type', mime);

  return new Response(
    nodeStreamToWeb(resultStream),
    { headers, status: 206 },
  );
};

export const registerAppProtocol = () => {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: 'app',
      privileges: {
        supportFetchAPI: true,
        // Don't trigger mixed content warnings (see https://stackoverflow.com/a/75988466)
        secure: true,
        // Allows loading <video>/<audio> streaming elements
        stream: true,
      }
    },
  ]);
};

export const handleAppProtocol = async (request: GlobalRequest, appDirectory: string) => {
  const url = new URL(request.url);
  const mime = url.searchParams.get('mime');
  const pathname = normalize(fileURLToPath(`file://${join(appDirectory, url.pathname)}`));

  // See https://security.stackexchange.com/a/123723
  if (pathname.startsWith('..')) {
    throw new Error(`Invalid URL (not absolute), ${request.url}`);
  }

  const file_url = pathToFileURL(pathname).toString();

  const rangeHeader = request.headers.get('Range');
  if (rangeHeader) {
    // This is a range request, handle it properly.
    return await handleRangeRequest(request, pathname, mime);
  } else {
    const headers = new Headers();
    if (mime) headers.set('Content-Type', mime);

    const response = await net.fetch(file_url, { headers });

    if (mime === 'text/css' && response.ok) {
      const initiator = url.searchParams.get('initiator');
      let css = await response.text();
      css = replaceCssUrls(css, initiator);
      return new Response(css, { headers });
    }

    return response;
  }
};