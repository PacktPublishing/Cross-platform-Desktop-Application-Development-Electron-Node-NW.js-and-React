/**
 * Class representing file context menu
 */
class ConextMenuView {
  /**
   * Create ConextMenu
   * @param {FileService} fileService
   * @param {I18nService} i18nService
   */
  constructor( fileService, i18nService ){
    this.file = fileService;
    this.i18n = i18nService;
    this.attach();
  }

  /**
   * Get meta-data for menu items
   * @param {string} fileName
   */
  getItems( fileName ){
    const file = this.file,
          isCopied = Boolean( file.copiedFile );

    return [
      {
        label: this.i18n.translate( "SHOW_FILE_IN_FOLDER", "Show Item in the Folder" ),
        enabled: Boolean( fileName ),
        click: () => file.showInFolder( fileName )
      },
      {
        type: "separator"
      },
      {
        label: this.i18n.translate( "COPY", "Copy" ),
        enabled: Boolean( fileName ),
        click: () => file.copy( fileName )
      },
      {
        label: this.i18n.translate( "PASTE", "Paste" ),
        enabled: isCopied,
        click: () => file.paste()
      },
      {
        label: this.i18n.translate( "PASTE_FROM_CLIPBOARD", "Paste image from clipboard" ),
        enabled: file.hasImageInClipboard(),
        click: () => file.pasteFromClipboard()
      },
      {
        type: "separator"
      },
      {
        label: this.i18n.translate( "DELETE", "Delete" ),
        enabled: Boolean( fileName ),
        click: () => file.remove( fileName )
      }
    ];
  }

   /**
   * Update content menu
   * @param {string} fileName
   * @returns {nw.Menu}
   */
  render( fileName ){
    const menu = new nw.Menu();
    this.getItems( fileName ).forEach(( item ) => menu.append( new nw.MenuItem( item )));
    return menu;
  }

  /**
   * Attach context menu to list element representing file
   */
  attach(){
    document.addEventListener( "contextmenu", ( e ) => {
      const el = e.target;
      if ( !( el instanceof HTMLElement ) ) {
        return;
      }

      if ( el.classList.contains( "file-list" ) ) {
        e.preventDefault();
        this.render()
          .popup( e.x, e.y );
      }
      // If a child of an element matching [data-file]
      if ( el.parentNode.dataset.file ) {
        e.preventDefault();
        this.render( el.parentNode.dataset.file )
          .popup( e.x, e.y );
      }

    });
  }
}

exports.ConextMenuView = ConextMenuView;