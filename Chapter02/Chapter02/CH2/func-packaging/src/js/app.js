const argv = require( "minimist" )( nw.App.argv ),
      { I18nService } = require( "./Service/I18n" ),
      { DirService } = require( "./Service/Dir" ),
      { FileService } = require( "./Service/File" ),
      { TitleBarActionsView } = require( "./View/TitleBarActions" ),
      { DirListView } = require( "./View/DirList" ),
      { FileListView } = require( "./View/FileList" ),
      { TitleBarPathView } = require( "./View/TitleBarPath" ),
      { LangSelectorView } = require( "./View/LangSelector" ),
      { TrayView } = require( "./View/Tray" ),
      { dictionary } = require( "./Data/dictionary" ),
      { ConextMenuView } = require( "./View/ConextMenu" ),
      i18nService = new I18nService( dictionary ),
      dirService = new DirService( argv._[ 0 ] ),
      //dirService = new DirService( nw.App.argv[ 0 ] ),
      fileService = new FileService( dirService );

new TitleBarActionsView( document.querySelector( "[data-bind=titlebar]" ), i18nService );
new DirListView( document.querySelector( "[data-bind=dirList]" ), dirService );
new FileListView( document.querySelector( "[data-bind=fileList]" ), dirService, i18nService, fileService );
new TitleBarPathView( document.querySelector( "[data-bind=path]" ), dirService );
new LangSelectorView( document.querySelector( "[data-bind=langSelector]" ), i18nService );
new ConextMenuView( fileService, i18nService );

dirService.notify();

new TrayView( "File Explorer" );

if ( argv.maximize ){
  nw.Window.get().maximize();
}
if ( argv.minimize ){
  nw.Window.get().minimize();
}
