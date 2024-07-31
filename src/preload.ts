const { contextBridge, ipcRenderer } = require('electron/renderer');



// See https://www.electronjs.org/docs/latest/tutorial/ipc#pattern-3-main-to-renderer
contextBridge.exposeInMainWorld('electronAPI', {
    onAppOpen: (callback) => ipcRenderer.on('app-open', (_event, value) => callback(value)),
});
