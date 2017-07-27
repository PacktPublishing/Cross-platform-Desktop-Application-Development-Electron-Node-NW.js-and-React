import * as React from "react";
import Footer from "./Footer";
import * as renderer from "react-test-renderer";
import { shallow } from "enzyme";
import * as manifest from "../../../package.json";

describe( "Footer", () => {
  it( "matches previously saved snapshot", () => {
    const tree = renderer.create(
      <Footer />
    );

    expect( tree.toJSON() ).toMatchSnapshot();
  });

  it( "renders manifest name", () => {
    const tree = shallow(
      <Footer />
    );
    expect ( tree.find( "footer" ).length ).toBe( 1 );
    expect( tree.find( "footer" ).text().indexOf( manifest.name ) ).not.toBe( -1 );
  });
});

