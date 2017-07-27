
const { I18nService } = require( "./js/Service/I18n" ),
      { DirService } = require( "./js/Service/Dir" ),
      { TitleBarActionsView } = require( "./js/View/TitleBarActions" ),
      { DirListView } = require( "./js/View/DirList" ),
      { FileListView } = require( "./js/View/FileList" ),
      { TitleBarPathView } = require( "./js/View/TitleBarPath" ),
      { LangSelectorView } = require( "./js/View/LangSelector" ),
      i18nService = new I18nService(),
      dirService = new DirService();

new TitleBarActionsView( document.querySelector( "[data-bind=titlebar]" ) );
new DirListView( document.querySelector( "[data-bind=dirList]" ), dirService );
new FileListView( document.querySelector( "[data-bind=fileList]" ), dirService, i18nService );
new TitleBarPathView( document.querySelector( "[data-bind=path]" ), dirService );
new LangSelectorView( document.querySelector( "[data-bind=langSelector]" ), i18nService );

dirService.notify();
