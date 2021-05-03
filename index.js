'use-strict';

const { app, BrowserWindow, ipcMain } = require('electron'); 

const path = require('path')
 
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.on('ready' , () => {
  let mainWindow = new BrowserWindow({
      width: 1200,
      height: 700,
      maxWidth: 1200,
      maxHeight: 700,
      frame: false, //tirar a parte de cima (incluindo botoes, so fecha pelo terminal)
      webPreferences: {
        nodeIntegration: true
    }
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  
});

app.on('window-all-closed', () => {
  app.quit();
})

ipcMain.on('about-window', () => {
  
  let aboutWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    frame: true, 
  });

  aboutWindow.loadURL(`file://${__dirname}/app/about/about.html`);

});