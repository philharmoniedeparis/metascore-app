import {
  app,
  BrowserWindow,
  dialog,
  Menu,
  protocol,
  session,
  ipcMain,
} from 'electron';
import { join, extname } from 'path';
import { lstatSync } from 'fs';
import AdmZip from 'adm-zip';
import mime from 'mime/lite';

const BASE_URL = import.meta.env.VITE_BASE_URL ?? "https://metascore.philharmoniedeparis.fr/";

let zip: AdmZip | null = null;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      sandbox: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(join(__dirname, 'index.html'));

  return mainWindow;
};

const openApp = (path: string) => {
  zip = new AdmZip(path);
  BrowserWindow.getFocusedWindow().loadFile(join(__dirname, 'app.html'));
}

const showOpenDialog = async () => {
  try {
    const result = await dialog.showOpenDialog({
      properties: ['openFile', 'dontAddToRecent'],
      filters: [{ name: 'metaScore Files', extensions: ['metascore'] }]
    });
    if (result.canceled) return;

    openApp(result.filePaths.at(0));
  } catch (err) {
    console.error(err)
  }
}

const createMenu = () => {
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          click: showOpenDialog,
          accelerator: 'CmdOrCtrl+O'
        },
        { role: 'quit' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
  ])
  Menu.setApplicationMenu(menu)
}

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'zip',
    privileges: {
      secure: true,
      supportFetchAPI: true,
      stream: true,
    }
  }
]);

app.whenReady().then(() => {
  // Redirect external requests to zip://.
  session.defaultSession.webRequest.onBeforeRequest(
    { urls: ['http://*/*', 'https://*/*'] },
    (details, callback) => {
      const url = details.url;
      const { host } = new URL(url, BASE_URL);

      if (host.startsWith('localhost')) {
        callback({});
        return;
      }

      let encoded = decodeURI(url);
      // Base64URL encode.
      encoded = btoa(encoded);
      encoded = encoded.replace(/\+/g, '-').replace(/\//g, '_');
      encoded = encoded.replace(/=+$/, '');

      const ext = extname(url);

      callback({
        redirectURL: `zip:///${encoded}?ext=${ext}`
      })
    }
  );

  // Handle zip:// requests.
  protocol.handle('zip', (request) => {
    const url = request.url;
    const { pathname, searchParams } = new URL(url);
    const filepath = pathname.replace(/^\//, '');
    const entry = zip?.getEntry(filepath);
    const headers = new Headers();

    if (entry) {
      const ext = searchParams.get('ext');
      if (ext) headers.set('content-type', mime.getType(ext));
      return new Response(entry.getData(), {
        headers
      });
    } else {
      headers.set('content-type', 'text/html');
      return new Response("Not found", {
        status: 404,
        headers,
      });
    }
  });

  ipcMain.handle('browseFile', () => {
    showOpenDialog();
  });

  ipcMain.handle('dropFile', (event, path) => {
    if (lstatSync(path).isFile() && extname(path) === ".metaScore") {
      openApp(path);
      return true;
    }
    return false;
  });

  createMenu();
  createWindow();
});


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

