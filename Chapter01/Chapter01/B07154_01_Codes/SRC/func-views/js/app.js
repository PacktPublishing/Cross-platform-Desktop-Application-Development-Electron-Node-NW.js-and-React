const { TitleBarActionsView } = require( "./js/View/TitleBarActions" );
new TitleBarActionsView( document.querySelector( "[data-bind=titlebar]" ) );

const { DirService } = require( "./js/Service/Dir" ),
      { DirListView } = require( "./js/View/DirList" ),
      { FileListView } = require( "./js/View/FileList" ),
      { TitleBarPathView } = require( "./js/View/TitleBarPath" ),
      dirService = new DirService();

new DirListView( document.querySelector( "[data-bind=dirList]" ), dirService );
new FileListView( document.querySelector( "[data-bind=fileList]" ), dirService );
new TitleBarPathView( document.querySelector( "[data-bind=path]" ), dirService );

dirService.notify();