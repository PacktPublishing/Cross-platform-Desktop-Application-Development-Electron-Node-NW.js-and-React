const { NEW_VERSION, SWAPPING, DOWNLOADING, INSTALLING, RESTARTING } = require( "./Modal/constants" );
/**
 * View class to handle titlebar actions
 */
class ModalView {
  /**
   * Constructs the view
	 * @param {I18nService} i18nService
   */
  constructor( i18nService ){
		this.i18n = i18nService;
    this.state = {
      action: NEW_VERSION,
      progress: 0
    },
    this.el = document.createElement( "div" );
    this.el.addEventListener( "click", this.onClick.bind( this ), false );
		this.render();
		// Subscribe on i18nService updates
		i18nService.on( "update", () => this.render() );

  }
  /**
   * Show modal
   */
  open( nextCb = () => {} ){
    this.nextCb = nextCb;
    document.body.appendChild( this.el );
  }
  /**
   * hide modal
   */
  close(){
    document.body.removeChild( this.el );
  }
  /**
   * Handle click event within modal
   * @param {Event} e
   */
  onClick( e ){
    if ( e.target.dataset.bind === "cancel" ){
      e.preventDefault();
      this.close();
    }
    if ( e.target.dataset.bind === "ok" ){
      e.preventDefault();
      this.nextCb();
    }
  }
  /**
   * Set state
   * @param {Object} state
   */
  setState( state ){
    this.state = state;
    this.render();
  }
  /**
   * Return translated label depending on the state
   * @returns {string}
   */
  getLabel(){
    const tr = this.i18n.translate.bind( this.i18n );
    switch( this.state.action ){
      case NEW_VERSION:
        return tr( "NEW_RELEASE", "New release is available. Would you like to update?" );
      case DOWNLOADING:
        return tr( "DOWNLOADING", "Downloading..." );
      case INSTALLING:
        return tr( "INSTALLING", "Installing..." );
      case SWAPPING:
        return tr( "SWAPPING", "Swapping..." );
      case RESTARTING:
        return tr( "RESTARTING", "Restarting..." );
    }
  }
  /**
   * Build progress section depending on the state
   * @returns {string}
   */
  getProcess(){
    if ( this.state.action !== DOWNLOADING && this.state.action !== INSTALLING ){
      return ``;
    }
    return `<progress class="modal__progress" value="${this.state.progress}" max="100"></progress>`;
  }
  /**
   * Build buttons section depending on the state
   * @returns {string}
   */
  getButtons(){
    const tr = this.i18n.translate.bind( this.i18n );
    if ( this.state.action !== NEW_VERSION ) {
      return ``;
    }
    return `
      <button data-bind="cancel" class="modal_btn">${tr( "NOT_NOW", "Not now" )}</button>
      <button data-bind="ok" class="modal_btn">${tr( "UPDATE", "Update" )}</button>`;
  }
  /**
   * Update view content
   */
  render(){
    this.el.className = "modal";
    this.el.innerHTML = `
      <div class="modal__window">
        <div class="modal__main">
          <div data-bind="label">${this.getLabel()}</div>
          ${this.getProcess()}
        </div>
        ${this.getButtons()}
      </div>
    `;
  }

}

exports.ModalView = ModalView;