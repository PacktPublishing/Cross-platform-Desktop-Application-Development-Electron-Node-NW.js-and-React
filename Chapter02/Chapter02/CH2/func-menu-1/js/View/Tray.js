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
    this.removeOnExit();
    this.render();
  }
  /**
   * Update Tray menu
   */
  render(){
    const icon = ( process.platform === "linux" ? "icon-48x48.png" : "icon-32x32.png" );

    this.tray = new nw.Tray({
      title: this.title,
      icon,
      iconsAreTemplates: false
    });

    const menu = new nw.Menu();
    menu.append( new nw.MenuItem({
      label: "Exit",
      click: () => appWindow.close()
    }));
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