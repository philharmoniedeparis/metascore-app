/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */


import 'metascore-library/dist/metaScore.Player.css'
import { Player } from 'metascore-library/dist/metaScore.Player.umd'

import './index.css';

window.electronAPI.onAppOpen(() => {
  Player.create({
    "el": "#app",
    "url": "app://data.json",
    "autoload": true,
    "keyboard": false,
    "api": false,
    "locale": "fr",
    "modules": {
      "app_renderer": {
        "adaptSize": true,
        "allowUpscaling": true
      }
    }
  });
});