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
    const clip = nw.Clipboard.get(),
          file = this.copiedFile;
    if ( fs.lstatSync( file ).isFile() ){
      cp( file, this.dir.getDir(), () => this.dir.notify() );
    }
    clip.set( "", "text" );
  }
  /**
   * Save file path in the clipboard
   * @param {string} file
   */
  copy( file ){
    this.copiedFile = this.dir.getFile( file );
    const clip = nw.Clipboard.get();
    clip.set( this.copiedFile, "text" );
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