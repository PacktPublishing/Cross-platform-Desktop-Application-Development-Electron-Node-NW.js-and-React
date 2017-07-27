
const { app, BrowserWindow, ipcMain } = require( "electron" ),
      path = require( "path" ),
      url = require( "url" ),
      { autoUpdater } = require( "electron-updater" );

// Keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;


/**
 * Send a message to renderer process
 * @param {string} event
 * @param {string} text
 */
function send( event, text = "" ) {
  mainWindow && mainWindow.webContents.send( event, text );
}

autoUpdater.on("checking-for-update", () => {
  send( "info", "Checking for update..." );
});
autoUpdater.on("update-available", () => {
  send( "info", "Update not available" );
});
autoUpdater.on("update-not-available", () => {
  send( "info", "Update not available" );
});
autoUpdater.on("error", () => {
  send( "info", "Error in auto-updater" );
});
autoUpdater.on("download-progress", () => {
  send( "info", "Download in progress..." );
});
autoUpdater.on("update-downloaded", () => {
  send( "info", "Update downloaded" );
  send( "update-downloaded" );
});

ipcMain.on( "restart", () => {
  autoUpdater.quitAndInstall();
});

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
     width: 1000, height: 600, frame: false,
     icon: path.join( __dirname, "icon-64x64.png" )
  });

  // and load the index.html of the app.
  mainWindow.loadURL( url.format({
    pathname: path.join( __dirname, "index.html" ),
    protocol: "file:",
    slashes: true
  }) );

  // Get DevTools
  // mainWindow.openDevTools();

  mainWindow.on( "closed", () => {
    mainWindow = null;
  });
}

app.on( "ready", () => {
  createWindow();
  autoUpdater.checkForUpdates();
});


app.on( "window-all-closed", () => {
  if ( process.platform !== "darwin" ) {
    app.quit();
  }
});

app.on( "activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

