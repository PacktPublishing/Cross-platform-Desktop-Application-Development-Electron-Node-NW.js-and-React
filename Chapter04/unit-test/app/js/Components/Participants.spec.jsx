import * as React from "react";
import Client from "../Service/Client";
import Participants from "./Participants";
import * as renderer from "react-test-renderer";

describe( "Participants", () => {
  it( "matches previously saved snapshot", () => {
    const items = [{
            name: "Jon",
            time: new Date( 2012, 2, 12, 5, 5, 5, 5 ) }
          ],
          client = new Client(),
          component = renderer.create( <Participants client={client} /> );

    component.getInstance().onClientParticipants( items );
    expect( component.toJSON() ).toMatchSnapshot();
  });
});

