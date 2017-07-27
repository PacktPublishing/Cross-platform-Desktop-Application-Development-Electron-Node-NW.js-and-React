/**
 * View class representing directory list
 */
class DirListView {
  /**
   * Create DirListView
   * @param {HTMLElement} boundingEl
   * @param {dirService} dirService
   */
  constructor( boundingEl, dirService ){
    this.el = boundingEl;
    this.dir = dirService;
    // Subscribe on DirService updates
    dirService.on( "update", () => this.update( dirService.getDirList() ) );
  }
  /**
   * Handle a request to change dir
   * @param {Event} e
   */
  onOpenDir( e ){
    e.preventDefault();
    this.dir.setDir( e.target.dataset.file );
  }
  /**
   * Ipdate the list of directories
   * @param {FileEntity[]} collection
   */
  update( collection ) {
    this.el.innerHTML = "";
    collection.forEach(( fInfo ) => {
      this.el.insertAdjacentHTML( "beforeend",
        `<li class="dir-list__li" data-file="${fInfo.fileName}">
         <i class="icon">folder</i> ${fInfo.fileName}</li>` );
    });
    this.bindUi();
  }
  /**
   * Bind event listeners
   */
  bindUi(){
    const liArr = Array.from( this.el.querySelectorAll( "li[data-file]" ) );
    liArr.forEach(( el ) => {
      el.addEventListener( "click", e => this.onOpenDir( e ), false );
    });
  }
}

exports.DirListView = DirListView;