import {
  app,
  BrowserWindow,
  dialog,
  Menu,
  protocol,
  session,
  ipcMain,
} from 'electron';
import { join, extname } from 'node:path';
import { lstat, readFile, mkdtemp, rm } from 'node:fs/promises';
import AdmZip from 'adm-zip';
import { program as cli } from 'commander';
import { productName, version, copyright, homepage } from '../package.json';
import { registerAppProtocol, handleAppProtocol } from './utils/appProtocolHandler';

interface AppData {
  base_url?: string
  offline: Record<string, { name: string, mime: string }>
}

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

const DEFAULT_BASE_URL = "https://metascore.philharmoniedeparis.fr/";

let appDirectory = null as string|null;
let appData = null as AppData|null;
let baseUrl = DEFAULT_BASE_URL;

if(require('electron-squirrel-startup')) app.quit();

/**
 * Process command line arguments.
 */
cli
  .name(productName)
  .version(version)
  .argument('[path]', 'path to a .metaScore file')
  .option('-f, --fullscreen', 'open in fullscreen')
  .option('-k, --kiosk', 'open in kiosk mode')
  .parse();
const cliOptions: { path?: string, fullscreen?: boolean, kiosk?: boolean } = {
  ...cli.opts(),
  path: cli.args[0],
};

/**
 * Create a new browser window.
 */
const createWindow = () => {
  // Create the browser window.
  const browserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      sandbox: false,
    },
    icon: join(__dirname, 'assets/icons/icon.png'),
  });

  // Emitted when the window enters a full-screen state.
  browserWindow.on('enter-full-screen', () => {
    browserWindow.setMenuBarVisibility(false);
    browserWindow.setAutoHideMenuBar(true);
  });

  // Emitted when the window leaves a full-screen state
  browserWindow.on('leave-full-screen', () => {
    browserWindow.setMenuBarVisibility(true);
    browserWindow.setAutoHideMenuBar(false);
  });

  return browserWindow;
};

/**
 * Load a .html file.
 */
const loadHTML = async (file: string, browserWindow?: BrowserWindow | null) => {
  browserWindow = browserWindow ?? BrowserWindow.getFocusedWindow();

  if (!browserWindow) return;

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    return browserWindow.loadURL(file === 'index.html' ? MAIN_WINDOW_VITE_DEV_SERVER_URL : join(__dirname, file));
  } else {
    return browserWindow.loadFile(join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/${file}`));
  }
};

const clearAppDirectory = async () => {
  if (appDirectory) {
    try {
      await rm(appDirectory, { recursive: true });
    } catch (e) { /**/ }

    appDirectory = null;
  }
}

/**
 * Process a .metaScore file.
 */
const openApp = async (path: string, browserWindow?: BrowserWindow | null) => {
  browserWindow = browserWindow ?? BrowserWindow.getFocusedWindow();

  await clearAppDirectory();

  const stat = await lstat(path);
  if (!stat.isFile() || extname(path) !== ".metaScore") {
    throw new Error("Not a .metaScore file.")
  }

  const zip = new AdmZip(path);
  baseUrl = DEFAULT_BASE_URL;

  try {
    appDirectory = await mkdtemp(join(app.getPath('temp'), 'metaScore'));

    zip.extractAllTo(appDirectory, true);
    console.log(appDirectory);

    appData = JSON.parse(await readFile(join(appDirectory, 'data.json'), { encoding: 'utf8' }));
    baseUrl = appData?.base_url ?? DEFAULT_BASE_URL
  } catch (e) {
    //
  }

  return loadHTML('app.html', browserWindow);
};

/**
 * Set/unset kiosk mode.
 *
 * The kiosk mode disables right-click and user-selection.
 */
let inKioskMode = false;
const toggleKioskMode = (toggle?: boolean, browserWindow?: BrowserWindow | null) => {
  inKioskMode = toggle ?? !inKioskMode;
  browserWindow = browserWindow ?? BrowserWindow.getFocusedWindow();
  browserWindow?.webContents.send('kiosk-mode', inKioskMode);
}

/**
 * Show the open file dialog.
 */
const showOpenDialog = async () => {
  const browserWindow = BrowserWindow.getFocusedWindow();
  if (browserWindow === null) return;

  try {
    const result = await dialog.showOpenDialog(browserWindow, {
      properties: ['openFile', 'dontAddToRecent'],
      filters: [{ name: 'metaScore Files', extensions: ['metascore'] }]
    });
    if (result.canceled) return;

    const filePath = result.filePaths.at(0);
    if (filePath) await openApp(filePath, browserWindow);
  } catch (err) {
    console.error(err);
  }
}

/**
 * Create the main menu.
 */
const createMenu = () => {
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          click: () => showOpenDialog(),
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
        { role: 'togglefullscreen' },
        {
          label: 'Toggle Kiosk Mode',
          click: () => toggleKioskMode(),
          accelerator: 'CmdOrCtrl+K'
        },
      ]
    },
    {
      label: 'Help',
      submenu: [
        { role: 'about', label: 'About', },
      ]
    },
  ])
  Menu.setApplicationMenu(menu)
}

/**
 * Register the .app schema.
 */
registerAppProtocol();

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

let cleanupBeforeQuit = true;
app.on('before-quit', async (event) => {
  if (cleanupBeforeQuit) {
    cleanupBeforeQuit = false;
    event.preventDefault();
    await clearAppDirectory();
    app.quit();
  }
});

app.on('activate', async () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    // Create a new window.
    const browserWindow = createWindow();
    // Load index.html.
    await loadHTML('index.html', browserWindow);
  }
});

/**
 * Customize the about panel.
 */
app.setAboutPanelOptions({
  applicationName: productName,
  applicationVersion: `v.${version}`,
  copyright,
  website: homepage,
});

app.whenReady().then(async () => {
  // Redirect external requests to app://.
  session.defaultSession.webRequest.onBeforeRequest(
    { urls: ['http://*/*', 'https://*/*'] },
    (details, callback) => {
      const url = details.url;
      const { host } = new URL(url, baseUrl);

      if (!host.startsWith('localhost')) {
        const entry = appData?.offline[url];
        if (entry) {
          const { name, mime } = entry;
          callback({
            redirectURL: `app:///${name}?mime=${mime}&initiator=${url}`
          });
          return;
        }
      }

      callback({});
    }
  );

  protocol.handle('app', async (request) => {
    if (!appDirectory) {
      return new Response("Not found", {
        status: 404,
      });
    }

    return await handleAppProtocol(request, appDirectory);
  });

  ipcMain.handle('browseFile', () => {
    return showOpenDialog();
  });

  ipcMain.handle('dropFile', (event, path) => {
    return openApp(path);
  });

  ipcMain.handle('getBaseUrl', () => {
    return baseUrl;
  });

  createMenu();
  const browserWindow = createWindow();

  const { path, fullscreen, kiosk } = cliOptions;
  if (path) {
    try {
      await openApp(path, browserWindow);
      if (kiosk) toggleKioskMode(true);
      if (fullscreen) browserWindow.setFullScreen(true);
    } catch (e) {
      await loadHTML('index.html', browserWindow);
    }
  } else {
    await loadHTML('index.html', browserWindow);
  }
});
