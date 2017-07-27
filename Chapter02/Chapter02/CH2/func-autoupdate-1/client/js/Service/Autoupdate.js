const AutoUpdater = require( "nw-autoupdater" ),
      updater = new AutoUpdater( nw.App.manifest );
/**
 *
 * @param {HTMLElement} el
 */
async function start( el ){
  try {
    // Update copy is running to replace app with the update
    if ( updater.isSwapRequest() ) {
      el.innerHTML = `Swapping...`;
      await updater.swap();
      el.innerHTML = `Restarting...`;
      await updater.restart();
      return;
    }

    // Download/unpack update if any available
    const rManifest = await updater.readRemoteManifest();
    const needsUpdate = await updater.checkNewVersion( rManifest );
    if ( !needsUpdate ) {
      return;
    }
    if ( !confirm( "New release is available. do you want to upgrade?" ) ) {
      return;
    }

    // Subscribe for progress events
    updater.on( "download", ( downloadSize, totalSize ) => {
      const procent = Math.floor( downloadSize / totalSize * 100 );
      el.innerHTML = `Downloading - ${procent}%`;
    });
    updater.on( "install", ( installFiles, totalFiles ) => {
      const procent = Math.floor( installFiles / totalFiles * 100 );
      el.innerHTML = `Installing - ${procent}%`;
    });

    const updateFile = await updater.download( rManifest );
    await updater.unpack( updateFile );

    await updater.restartToSwap();
  } catch ( e ) {
    console.error( e );
  }
}

exports.start = start;