const path = require('path')
const { app, BrowserWindow } = require('electron/main')
const { ipcMain } = require('electron')
const isMac = process.platform === 'darwin'


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.setMenuBarVisibility(false)
    win.loadFile(path.join(__dirname, './renderer/index.html'))

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})



app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
    }
})