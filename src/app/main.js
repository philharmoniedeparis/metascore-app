import path from 'node:path';
import url from 'node:url';
import {
  app,
  dialog,
  BrowserWindow,
  net,
  protocol,
  session,
  Menu,
  globalShortcut,
} from 'electron';
import AdmZip from 'adm-zip';
import mime from 'mime-types';

let zip = null;

const createWindow = () => {
  const browserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: true,
      preload: path.join(import.meta.dirname, 'preload.js')
    }
  })

  // Emitted when the window enters a full-screen state.
  browserWindow.on('enter-full-screen', () => {
    browserWindow.setMenuBarVisibility(false);
  });

  // Emitted when the window leaves a full-screen state
  browserWindow.on('leave-full-screen', () => {
    browserWindow.setMenuBarVisibility(true);
  });

  browserWindow.loadFile('../renderer/index.html');

  return browserWindow;
}

const createMenu = () => {
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label:'Open File',
          accelerator: 'CmdOrCtrl+O',
          click: async() => {
            try {
              const result = await dialog.showOpenDialog({
                properties: ['openFile', 'dontAddToRecent '],
                filters: [{ name: 'metaScore Files', extensions: ['metascore']}]
              });
              if (result.canceled) return;

              zip =  new AdmZip(result.filePaths.at(0));
              BrowserWindow.getFocusedWindow().webContents.send('app-open');
            } catch(err) {
              console.error(err)
            }
          },
          accelerator: 'CmdOrCtrl+O'
        },
        {
          role: 'quit',
          accelerator: 'CmdOrCtrl+Q',
        }
      ]
    },
    {
      label: 'Window',
      submenu: [
          {
              role: 'togglefullscreen',
              accelerator: 'CmdOrCtrl+F'
          }
      ]
  },

  ])
  Menu.setApplicationMenu(menu)
}

const registerShortcuts = () => {
  globalShortcut.register('CmdOrCtrl+D', function(){
      const win = BrowserWindow.getFocusedWindow();
      if(!win) return;

      if(!win.webContents.isDevToolsOpened()){
        win.webContents.openDevTools({
          'mode': 'detach'
        });
      } else{
        win.webContents.closeDevTools();
      }
  });
};

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: {
      secure: true,
      supportFetchAPI: true,
      stream: true,
    }
  }
]);

app.whenReady().then(() => {
  // Redirect metascore.philharmoniedeparis.fr requests to app://.
  session.defaultSession.webRequest.onBeforeRequest(
    {
      urls: ['*://metascore.philharmoniedeparis.fr/*']
    },
    (details, callback) => {
      const { pathname } = new URL(details.url)
      callback({
        redirectURL: `app://${pathname.slice(1)}`
      });
    }
  );

  // Handle internal:// requests.
  protocol.handle('internal', (request) => {
    const filePath = request.url.slice('internal://'.length);
    const pathToServe = path.resolve(import.meta.dirname, '../', 'renderer', filePath);
    const relativePath = path.relative(path.resolve(import.meta.dirname, '../'), pathToServe);
    const isSafe = relativePath && !relativePath.startsWith('..') && !path.isAbsolute(relativePath);

    if (!isSafe) {
      return new Response(null, {
        status: 400,
        headers: { 'content-type': 'text/html' }
      });
    }

    return net.fetch(url.pathToFileURL(pathToServe).toString())
  });

  // Handle app:// requests.
  protocol.handle('app', (request) => {
    const filePath = request.url.slice('app://'.length);
    const entry = zip?.getEntry(filePath);
    console.log(filePath, entry);
    if (entry) {
      return new Response(entry.getData(), {
        headers: { 'content-type': mime.lookup(entry.name) }
      });
    } else {
      return new Response("Not found", {
        status: 404,
        headers: { 'content-type': 'text/html' }
      });
    }
  });

  // Open a window if none are open (macOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  createMenu();
  createWindow();
  registerShortcuts();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})