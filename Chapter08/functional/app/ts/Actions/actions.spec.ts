import * as React from "react";
import * as vo from "../Constants";

const DomStorage = require( "dom-storage" );
global.localStorage = <Storage>( new DomStorage() );

import actions from "./actions";
import * as nock from "nock";
import * as fs from "fs";
import * as path from "path";


describe( "Actions/actions", () => {

  describe( "toggleOpenAddFeed", () => {
    it( "creates an expected action", () => {
       const FIX_VAL = true,
             expected = { payload: FIX_VAL, "type": vo.TOGGLE_ADD_FEED };

       expect( actions.toggleOpenAddFeed( FIX_VAL ) ).toEqual( expected );
    });
  });

  describe( "setActiveFeed", () => {
    it( "creates an expected action", () => {
       const FIX_VAL = "url",
             expected = { payload: FIX_VAL, "type": vo.SET_ACTIVE_FEED };

       expect( actions.setActiveFeed( FIX_VAL ) ).toEqual( expected );
    });
  });

  describe( "fetchFeed", () => {
    beforeEach(() => {
      const xml = fs.readFileSync( path.join( __dirname, "./fixture/rss.xml" ), "utf8" );
      nock( "http://feeds.feedburner.com" )
        .get( "/CssTricks" )
        .reply( 200, xml );
    });
    afterEach(() => {
      nock.cleanAll();
    });

    it( "creates an expected action", async () => {
      const action = actions.fetchFeed( "http://feeds.feedburner.com/CssTricks" ),
            res = await action.payload;
        expect( res.title ).toBe( "CSS-Tricks" );
    });
  });



});
