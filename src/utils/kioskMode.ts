import { BrowserWindow } from 'electron';
import EventEmitter from 'node:events';

const emitter = new EventEmitter();
  
export let inKioskMode = false;

/**
 * Set/unset kiosk mode.
 *
 * The kiosk mode disables right-click and user-selection.
 */
export const toggleKioskMode = (toggle?: boolean, browserWindow?: BrowserWindow | null) => {
  inKioskMode = toggle ?? !inKioskMode;
  browserWindow = browserWindow ?? BrowserWindow.getFocusedWindow();
  browserWindow?.webContents.send('kiosk-mode', inKioskMode);

  emitter.emit('toggle');
}

export const onToggle = (listener: () => void) => {
  emitter.on('toggle', listener)
}

