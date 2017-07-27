const { NEW_VERSION, DOWNLOADING, INSTALLING, SWAPPING, RESTARTING } = require( "../View/Modal/constants" );

const AutoUpdater = require( "nw-autoupdater" ),
      updater = new AutoUpdater( nw.App.manifest );


async function start( modal ){
  try {
    // Update copy is running to replace app with the update
    if ( updater.isSwapRequest() ) {
      modal.setState({
        action: SWAPPING
      });
      modal.open();
      await updater.swap();
      modal.setState({
        action: RESTARTING
      });
      await updater.restart();
      return;
    }

    // Download/unpack update if any available
    const rManifest = await updater.readRemoteManifest();
    const needsUpdate = await updater.checkNewVersion( rManifest );
    if ( !needsUpdate ) {
      return;
    }

    // Subscribe for progress events
    updater.on( "download", ( downloadSize, totalSize ) => {
      modal.setState({
        action: DOWNLOADING,
        progress: Math.floor( downloadSize / totalSize * 100 )
      });
    });
    updater.on( "install", ( installFiles, totalFiles ) => {
      modal.setState({
        action: INSTALLING,
        progress: Math.floor( installFiles / totalFiles * 100 )
      });
    });

    modal.setState({
        action: NEW_VERSION
    });

    modal.open(async () => {
      const updateFile = await updater.download( rManifest );
      await updater.unpack( updateFile );
      await updater.restartToSwap();
    });


  } catch ( e ) {
    console.error( e );
  }
}

exports.start = start;