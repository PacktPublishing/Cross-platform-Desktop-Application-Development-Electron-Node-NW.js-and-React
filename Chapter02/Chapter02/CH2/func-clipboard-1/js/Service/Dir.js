const fs = require( "fs" ),
      { join, parse } = require( "path" ),
      EventEmitter = require( "events" );

/**
 * Class providing access to file system
 * @fires DirService#update
 */
class DirService extends EventEmitter {

  /**
   * Create DirService
   * @param {string} dir
   */
  constructor( dir = null ){
    super();
    this.dir = dir || nw.App.argv[ 0 ] || process.cwd();
  }

  /**
   * Set current directory
   * @param {string} dir
   */
  setDir( dir = "" ){
    let newDir = join( this.dir, dir );
    // Early exit
    if ( DirService.getStats( newDir ) === false ) {
      return;
    }
    this.dir = newDir;
    this.notify();
  }
  /**
   * Notify all the listeners there is an update
   */
  notify(){
    /**
     * Informs listeners that file system received new data
     * @event DirService#update
     * @type void
     */
    this.emit( "update" );
  }

  /**
   * Check if the current path is root
   * @returns {Boolean}
   */
  isRoot(){
    const { root } = parse( this.dir );
    return ( root === this.dir );
  }
  /**
   * Get file/dir info
   * @param {string} filePath
   * @returns {fs.Stats}
   */
  static getStats( filePath ) {
    try {
      return fs.statSync( filePath );
    } catch( e ) {
      return false;
    }
  }

  /**
   * @typedef FileEntity
   * @property {string} fileName
   * @property {number} size
   * @property {string} mtime
   * @property {boolean} isDirectory
   * @property {boolean} isFile
   */

  /**
   * Read the contents of a given directory
   * @param {string} dir - directory path
   * @returns {FileEntity[]}
   */
  static readDir( dir ) {
    const fInfoArr = fs.readdirSync( dir, "utf-8" ).map(( fileName ) => {
      const filePath = join( dir, fileName ),
            stats = DirService.getStats( filePath );
      if ( stats === false ) {
        return false;
      }
      return {
        fileName,
        stats
      };
    });
    return fInfoArr.filter( item => item !== false );
  }

  /**
   * Get list of directories in current path
   * @returns {FileEntity[]}
   */
  getDirList() {
    const collection = DirService.readDir( this.dir ).filter(( fInfo ) => fInfo.stats.isDirectory() );
    if ( !this.isRoot() ) {
      collection.unshift({ fileName: ".." });
    }
    return collection;
  }

  /**
   * Get list of files in current path
   * @returns {FileEntity[]}
   */
  getFileList() {
    return DirService.readDir( this.dir ).filter(( fInfo ) => fInfo.stats.isFile() );
  }
  /**
   * Get current path
   * @returns {string}
   */
  getDir(){
    return this.dir;
  }
  /**
   * Get full path for a given file name
   * @param {string} file
   * @returns {string}
   */
  getFile( file ){
    return join( this.dir, file );
  }
};

exports.DirService = DirService;