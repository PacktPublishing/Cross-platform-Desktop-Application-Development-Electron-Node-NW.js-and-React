const appWindow = nw.Window.get();
/**
 * View class representing Tray
 */
class TrayView {
  /**
   * Create TrayView
   * @param {string} title
   */
  constructor( title ){
    this.tray = null;
    this.title = title;
    // subscribe to window events
    appWindow.on("maximize", () => this.render( false ));
    appWindow.on("minimize", () => this.render( false ));
    appWindow.on("restore", () => this.render( true ));

    this.removeOnExit();
    this.render( true );
  }
  /**
   * Get meta-data for menu items
   * @param {boolean} reset - says if window in the initial state
   */
  getItems( reset ){
    return [
      {
        label: "Minimize",
        enabled: reset,
        click: () => appWindow.minimize()
      },
      {
        label: "Maximize",
        enabled: reset,
        click: () => appWindow.maximize()
      },
      {
        label: "Restore",
        enabled: !reset,
        click: () => appWindow.restore()
      },
      {
        type: "separator"
      },
      {
        label: "Exit",
        click: () => appWindow.close()
      }
    ];
  }
  /**
   * Update Tray menu
   * @param {boolean} reset - says if window in the initial state
   */
  render( reset ){
    if ( this.tray ) {
      this.tray.remove();
    }

    const icon = ( process.platform === "linux" ? "icon-48x48.png" : "icon-32x32.png" );

    this.tray = new nw.Tray({
      title: this.title,
      icon,
      iconsAreTemplates: true
    });

    const menu = new nw.Menu();
    this.getItems( reset ).forEach(( item ) => menu.append( new nw.MenuItem( item )));

    this.tray.menu = menu;
  }
  /**
   * Remove tray on window close
   * @private
   */
  removeOnExit(){
    appWindow.on( "close", () => {
      this.tray.remove();
      appWindow.hide(); // Pretend to be closed already
      appWindow.close( true );
    });
  }

}

exports.TrayView = TrayView;