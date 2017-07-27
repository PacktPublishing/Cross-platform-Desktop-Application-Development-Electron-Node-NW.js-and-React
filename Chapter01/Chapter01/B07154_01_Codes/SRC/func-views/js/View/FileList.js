const filesize = require( "filesize" );

/**
 * View class representing File List
 */
class FileListView {
  /**
   * Create FileListView
   * @param {HTMLElement} boundingEl
   * @param {DirService} dirService
   */
  constructor( boundingEl, dirService ){
    this.dir = dirService;
    this.el = boundingEl;
    // Subscribe on DirService updates
    dirService.on( "update", () => this.update( dirService.getFileList() ) );
  }
  /**
   * Helper to format datetime
   * @param {string} timeString
   * @returns {string}
   */
  static formatTime( timeString ){
    const date = new Date( Date.parse( timeString ) );
    return date.toDateString();
  }
  /**
   * Update file list
   * @param {FileEntity[]} collection
   */
  update( collection ) {
    this.el.innerHTML = `<li class="file-list__li file-list__head">
        <span class="file-list__li__name">Name</span>
        <span class="file-list__li__size">Size</span>
        <span class="file-list__li__time">Modified</span>
      </li>`;
    collection.forEach(( fInfo ) => {
      this.el.insertAdjacentHTML( "beforeend", `<li class="file-list__li" data-file="${fInfo.fileName}">
        <span class="file-list__li__name">${fInfo.fileName}</span>
        <span class="file-list__li__size">${filesize(fInfo.stats.size)}</span>
        <span class="file-list__li__time">${FileListView.formatTime( fInfo.stats.mtime )}</span>
      </li>` );
    });
    this.bindUi();
  }
  /**
   * Bind event listeners
   */
  bindUi(){
    Array.from( this.el.querySelectorAll( ".file-list__li" ) ).forEach(( el ) => {
      el.addEventListener( "click", ( e ) => {
        e.preventDefault();
        nw.Shell.openItem( this.dir.getFile( el.dataset.file ) );
      }, false );
    });
  }

}

exports.FileListView = FileListView;