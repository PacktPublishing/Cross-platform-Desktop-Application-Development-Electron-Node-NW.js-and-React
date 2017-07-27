const { double } = require( "./unit" );

describe( "double", () => {
  it( "doubles a given number", () => {
    const x = 1;
    const res = double( x );
    expect( res ).toBe( 2 );
  });

});