const fs = require( "fs" ),
      path = require( "path" ),
      /**
       * Copy file helper
       * @param {string} from
       * @param {string} to
       * @param {function} done
       */
      cp = ( from, toDir, done ) => {
        const basename = path.basename( from ),
              to = path.join( toDir, basename ),
              write = fs.createWriteStream( to ) ;

        fs.createReadStream( from )
          .pipe( write );

        write
          .on( "finish",  done );
      };

/**
 * Class handling file operations
 */
class FileService {
  /**
   * Create FileService
   * @param {DirService} dirService
   */
  constructor( dirService ){
    this.dir = dirService;
    this.copiedFile = null;
  }
  /**
   * Remove file by name
   * @param {string} file
   */
  remove( file ){
    fs.unlinkSync( this.dir.getFile( file ) );
    this.dir.notify();
  }
  /**
   * Paste file from given location
   */
  paste(){
    const file = this.copiedFile;
    if ( fs.lstatSync( file ).isFile() ){
      cp( file, this.dir.getDir(), () => this.dir.notify() );
    }
  }
  /**
   * Check if clipboard contains an image
   * @returns {Boolean}
   */
  hasImageInClipboard(){
    const clip = nw.Clipboard.get();
    return clip.readAvailableTypes().indexOf( "png" ) !== -1;
  }
  /**
   * Paste image from clipboard as PNG
   */
  pasteFromClipboard(){
    const clip = nw.Clipboard.get();
    if ( this.hasImageInClipboard() ) {
      const base64 = clip.get( "png", true ),
            binary = Buffer.from( base64, "base64" ),
            filename = Date.now() + "--img.png";
      fs.writeFileSync( this.dir.getFile( filename ), binary );
      this.dir.notify();
    }
  }

  /**
   * Copy image in the clipboard
   * @param {string} file
   * @param {string} type
   */
  copyImage( file, type ){
    const clip = nw.Clipboard.get(),
          // load file content as BASE64
          data = fs.readFileSync( file ).toString( "base64" ),
          // image as HTML
          html = `<img src="file:///${encodeURI( data.replace( /^\//, "" ) )}">`;

    // write both options (raw image and HTML) to the clipboard
    clip.set([
      { type, data: data, raw: true },
      { type: "html", data: html }
    ]);
  }

  /**
   * Save file path in the clipboard
   * @param {string} file
   */
  copy( file ){
    this.copiedFile = this.dir.getFile( file );
    const ext = path.parse( this.copiedFile ).ext.substr( 1 );
    switch ( ext ){
      case "jpg":
      case "jpeg":
        return this.copyImage( this.copiedFile, "jpeg" );
      case "png":
        return this.copyImage( this.copiedFile, "png" );
    }
  }
  /**
   * Open file by name
   * @param {string} file
   */
  open( file ){
    nw.Shell.openItem( this.dir.getFile( file ) );
  }
  /**
   * Show file in folder by name
   * @param {string} file
   */
  showInFolder( file ){
    nw.Shell.showItemInFolder( this.dir.getFile( file ) );
  }
};

exports.FileService = FileService;