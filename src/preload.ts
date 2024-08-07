const { contextBridge, ipcRenderer } = require('electron/renderer');

// See https://www.electronjs.org/docs/latest/tutorial/ipc#pattern-3-main-to-renderer
contextBridge.exposeInMainWorld('electronAPI', {
    baseUrl: import.meta.env.VITE_BASE_URL,
    browseFile: () => ipcRenderer.invoke('browseFile'),
    dropFile: (path) => ipcRenderer.invoke('dropFile', path),
    onAppOpen: (callback) => ipcRenderer.on('app-open', () => callback()),
});
