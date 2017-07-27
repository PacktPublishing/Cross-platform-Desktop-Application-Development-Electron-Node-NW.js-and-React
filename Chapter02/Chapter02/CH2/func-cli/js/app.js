const argv = require( "minimist" )( nw.App.argv ),
      { I18nService } = require( "./js/Service/I18n" ),
      { DirService } = require( "./js/Service/Dir" ),
      { FileService } = require( "./js/Service/File" ),
      { TitleBarActionsView } = require( "./js/View/TitleBarActions" ),
      { DirListView } = require( "./js/View/DirList" ),
      { FileListView } = require( "./js/View/FileList" ),
      { TitleBarPathView } = require( "./js/View/TitleBarPath" ),
      { LangSelectorView } = require( "./js/View/LangSelector" ),
      { TrayView } = require( "./js/View/Tray" ),
      { dictionary } = require( "./js/Data/dictionary" ),
      { ConextMenuView } = require( "./js/View/ConextMenu" ),
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
