import {
  app,
  BrowserWindow,
  dialog,
  Menu,
  protocol,
  session,
} from 'electron';
import path from 'path';
import AdmZip from 'adm-zip';
import mime from 'mime-types';
import base64url from "base64url";

let zip: AdmZip | null = null;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
/*if (require('electron-squirrel-startup')) {
  app.quit();
}*/

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  return mainWindow;
};

const createMenu = () => {
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          click: async () => {
            try {
              const result = await dialog.showOpenDialog({
                properties: ['openFile', 'dontAddToRecent '],
                filters: [{ name: 'metaScore Files', extensions: ['metascore'] }]
              });
              if (result.canceled) return;

              zip = new AdmZip(result.filePaths.at(0));
              BrowserWindow.getFocusedWindow().webContents.send('app-open');
            } catch (err) {
              console.error(err)
            }
          },
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
      const { host } = new URL(url);
      
      if (host.startsWith('localhost')) {
        callback({});
        return;
      }

      const name = base64url.encode(url);
      callback({
        redirectURL: `zip:///files/${name}`
      })
    }
  );

  // Handle zip:// requests.
  protocol.handle('zip', (request) => {
    const url = request.url;
    const { pathname } = new URL(url);
    const filepath = pathname.replace(/^\//, '');
    const entry = zip?.getEntry(filepath);
    if (entry) {
      return new Response(entry.getData());
    } else {
      return new Response("Not found", {
        status: 404,
        headers: { 'content-type': 'text/html' }
      });
    }
  });

  createMenu();
  createWindow();
})


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


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
