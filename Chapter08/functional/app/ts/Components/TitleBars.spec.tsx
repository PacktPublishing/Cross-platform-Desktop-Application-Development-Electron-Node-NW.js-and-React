import * as React from "react";
import TitleBar from "./TitleBar";
import * as renderer from "react-test-renderer";

describe( "TitleBar", () => {
  it( "renders correctly", () => {
    const tree = renderer.create(
      <TitleBar />
    ).toJSON();
    expect( tree ).toMatchSnapshot();
  });
});

