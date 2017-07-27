/**
 * View class that keeps the path in the titlebar in sync with DirService
 */
class TitleBarPathView {
  /**
   * Create TitleBarPath
   * @param {HTMLElement} boundingEl
   * @param {DirService} dirService
   */
  constructor( boundingEl, dirService ){
    this.el = boundingEl;
    dirService.on( "update", () => this.render( dirService.getDir() ) );
  }
  /**
   * Updates the path
   * @param {string} dir
   */
  render( dir ) {
    this.el.innerHTML = dir;
  }
}

exports.TitleBarPathView = TitleBarPathView;