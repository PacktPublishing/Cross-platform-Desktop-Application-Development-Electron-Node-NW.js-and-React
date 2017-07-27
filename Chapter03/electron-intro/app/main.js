
const { app, BrowserWindow } = require( "electron" ),
      path = require( "path" ),
      url = require( "url" );

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000, height: 600
  });

  mainWindow.loadURL( url.format({
    pathname: path.join( __dirname, "index.html" ),
    protocol: "file:",
    slashes: true
  }) );

  mainWindow.on( "closed", () => {
    mainWindow = null;
  });
}

app.on( "ready", createWindow );

app.on( "window-all-closed", () => {
  if ( process.platform !== "darwin" ) {
    app.quit();
  }
});

app.on( "activate", () => {
  if ( mainWindow === null ) {
    createWindow();
  }
});

require( "electron-debug" )();



