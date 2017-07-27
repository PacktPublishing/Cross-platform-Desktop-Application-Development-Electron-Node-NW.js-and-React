/**
 * View class to handle language selector
 */
class LangSelectorView {
  /**
   * create LangSelectorView
   * @param {HTMLElement} boundingEl
	 * @param {I18n} i18n
   */
  constructor( boundingEl, i18n ){
    boundingEl.addEventListener( "change", this.onChanged.bind( this ), false );
    this.i18n = i18n;
  }
  /**
   * Handle when select gets changed
   * @param {Event} e
   */
  onChanged( e ){
    const selectEl = e.target;
    this.i18n.locale = selectEl.value;
    this.i18n.notify();
  }
}

exports.LangSelectorView = LangSelectorView;