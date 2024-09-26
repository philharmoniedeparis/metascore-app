import { contextBridge, ipcRenderer } from 'electron';

// See https://www.electronjs.org/docs/latest/tutorial/ipc#pattern-3-main-to-renderer
contextBridge.exposeInMainWorld('electronAPI', {
    getBaseUrl: () => ipcRenderer.invoke('getBaseUrl'),
    browseFile: () => ipcRenderer.invoke('browseFile'),
    dropFile: (path: string) => ipcRenderer.invoke('dropFile', path),
    onKioskMode: (callback) => ipcRenderer.on('kiosk-mode', (event, value) => callback(value)),
});
