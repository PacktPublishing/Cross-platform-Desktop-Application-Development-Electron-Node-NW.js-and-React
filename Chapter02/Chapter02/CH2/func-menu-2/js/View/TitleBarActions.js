const appWindow = nw.Window.get();
/**
 * View class to handle titlebar actions
 */
class TitleBarActionsView {
  /**
   * Constructs the view
   * @param {HTMLElement} boundingEl
   * @param {I18nService} i18nService
   */
  constructor( boundingEl, i18nService ){
    this.i18n = i18nService;
    this.unmaximizeEl = boundingEl.querySelector( "[data-bind=unmaximize]" );
    this.maximizeEl = boundingEl.querySelector( "[data-bind=maximize]" );
    this.minimizeEl = boundingEl.querySelector( "[data-bind=minimize]" );
    this.closeEl = boundingEl.querySelector( "[data-bind=close]" );
    this.bindUi();
    // Subscribe on i18nService updates
    i18nService.on( "update", () => this.translate() );

    // subscribe to window events
    appWindow.on("maximize", () => this.toggleButtons( false ) );
    appWindow.on("minimize", () => this.toggleButtons( false ) );
    appWindow.on("restore", () => this.toggleButtons( true ) );
  }
  /**
   * Transalte action titles
   */
  translate(){
    this.unmaximizeEl.title = this.i18n.translate( "RESTORE_WIN", "Restore window" );
    this.maximizeEl.title = this.i18n.translate( "MAXIMIZE_WIN", "Maximize window" );
    this.minimizeEl.title = this.i18n.translate( "MINIMIZE_WIN", "Minimize window" );
    this.closeEl.title = this.i18n.translate( "CLOSE_WIN", "Close window" );
  }
  /**
   * Subscribe for click events
   */
  bindUi(){
    this.closeEl.addEventListener( "click", this.onClose.bind( this ), false );
    this.minimizeEl.addEventListener( "click", this.onMinimize.bind( this ), false );
    this.maximizeEl.addEventListener( "click", this.onMaximize.bind( this ), false );
    this.unmaximizeEl.addEventListener( "click", this.onRestore.bind( this ), false );
  }
  /**
   * Toggle maximize/minimize/restore buttons visibility
   * @param {boolean} reset - says if window in the initial state
   */
  toggleButtons( reset ){
    this.maximizeEl.classList.toggle( "is-hidden", !reset );
    this.unmaximizeEl.classList.toggle( "is-hidden", reset );
    this.minimizeEl.classList.toggle( "is-hidden", !reset );
  }
  /**
   * Handle when 'unmaximize' button is clicked
   * @param {Event} e
   */
  onRestore( e ) {
    e.preventDefault();
    appWindow.restore();
  }
  /**
   * Handle when 'maximize' button is clicked
   * @param {Event} e
   */
  onMaximize( e ) {
    e.preventDefault();
    appWindow.maximize();
  }
  /**
   * Handle when 'minimize' button is clicked
   * @param {Event} e
   */
  onMinimize( e ) {
    e.preventDefault();
    appWindow.minimize();
  }
  /**
   * Handle when 'close' button is clicked
   * @param {Event} e
   */
  onClose( e ) {
    e.preventDefault();
    appWindow.close();
  }
}

exports.TitleBarActionsView = TitleBarActionsView;