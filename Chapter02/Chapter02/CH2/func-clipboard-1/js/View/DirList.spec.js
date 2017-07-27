const { DirListView } = require( "./DirList" ),
      { DirService } = require( "../Service/Dir" );

describe( "View/DirList", function(){

  beforeEach(() => {
    this.sandbox = document.getElementById( "sandbox" );
    this.sandbox.innerHTML = `<ul data-bind="dirList"></ul>`;
  });

  afterEach(() => {
    this.sandbox.innerHTML = ``;
  });

  describe( "#update", function(){
    it( "updates from a given collection", () => {
      const dirService = new DirService(),
            view = new DirListView( this.sandbox.querySelector( "[data-bind=dirList]" ), dirService );
      view.update([
        { fileName: "foo" }, { fileName: "bar" }
      ]);
      expect( this.sandbox.querySelectorAll( ".dir-list__li" ).length ).toBe( 2 );
    });
  });
});