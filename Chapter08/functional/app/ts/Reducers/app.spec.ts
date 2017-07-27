import { IAppState } from "../Interfaces";
import * as vo from "../Constants";
import app from "./app";

describe( "Reducers/app", () => {

  describe( "'undefined'", () => {
    it( "should return default state", () => {
      const defaultState: IAppState = {
        isOpenAddFeed: false,
        menu: [],
        items: [],
        feedError: "",
        activeFeedUrl: ""
      };
      expect( app( undefined, {}) ).toEqual( defaultState );
    });
  });

  describe( "SET_ACTIVE_FEED", () => {
    it( "should return a new state with toggled isOpenAddFeed", () => {
      const action = {
              type: vo.TOGGLE_ADD_FEED,
              payload: true
            },
            newState = app( undefined, action );
      expect( newState.isOpenAddFeed ).toEqual( true );
    });
  });

});
