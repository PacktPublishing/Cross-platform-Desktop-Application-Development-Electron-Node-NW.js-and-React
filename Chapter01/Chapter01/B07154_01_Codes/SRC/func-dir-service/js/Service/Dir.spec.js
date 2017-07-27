const { DirService } = require( "./Dir" ),
      CWD = process.cwd(),
      mock = require( "mock-fs" ),
      { join } = require( "path" );

describe( "Service/Dir", () => {

  beforeEach(() => {
    mock({
     foo: {
        bar: {
          baz: "baz",
          qux: "qux"
        }
     }
    });
    this.fs = new DirService( "foo" );
  });

  afterEach( mock.restore );


  describe( "#getDir", () => {
    it( "returns current dir", () => {
       expect( this.fs.getDir() ).toBe( "foo" );
    });
  });

  describe( "#setDir", () => {
    it( "sets new dir", () => {
       this.fs.setDir( "bar" );
       expect( this.fs.getDir() ).toBe( join( "foo", "bar" ) );
    });
    it( "fires update event", ( done ) => {
       this.fs.on( "update", () => {
         expect( true ).toBe( true );
         done();
       });
       this.fs.setDir();
    });
  });

  describe( "#getFileList", () => {
    it( "receives intended file list", () => {
       this.fs = new DirService( "foo" );
       this.fs.setDir( "bar" );
       let files = this.fs.getFileList();
       expect( files.length ).toBe( 2 );
    });
    it( "every file has expected properties", () => {
       this.fs = new DirService( join( "foo", "bar" ) );
       const files = this.fs.getFileList();
       console.log( files );
       const [ file ] = files;
       expect( file.fileName ).toBe( "baz" );
       expect( file.stats.size ).toBe( 3 );
       expect( file.stats.isFile() ).toBe( true );
       expect( file.stats.isDirectory() ).toBe( false );
       expect( file.stats.mtime ).toBeTruthy();
    });
  });
});