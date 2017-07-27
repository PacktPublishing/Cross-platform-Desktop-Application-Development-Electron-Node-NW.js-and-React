
const { app, BrowserWindow, ipcMain } = require( "electron" ),
      path = require( "path" ),
      url = require( "url" );

// Keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');


function createWindow() {
  
  installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

  installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200, height: 600,
    icon: path.join( __dirname, "icon-64x64.png" )
  });

  // and load the index.html of the app.
  mainWindow.loadURL( url.format({
    pathname: path.join( __dirname, "index.html" ),
    protocol: "file:",
    slashes: true
  }) );


  // Emitted when the window is closed.
  mainWindow.on( "closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on( "ready", createWindow );

// Quit when all windows are closed.
app.on( "window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if ( process.platform !== "darwin" ) {
    app.quit();
  }
});

app.on( "activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});


ipcMain.on( "closeApp", () => {
  mainWindow.close();
});
ipcMain.on( "minimize", () => {
  mainWindow.minimize();
});
ipcMain.on( "unminimize", () => {
  mainWindow.restore();
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

require( "electron-debug" )();



