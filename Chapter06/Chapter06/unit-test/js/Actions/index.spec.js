import { createStore } from "redux";
import { toggleRecording } from "./index";

describe( "Action creators", () => {
  describe( "toggleRecording", () => {
    it( "should return a valid action", () => {
      const FLAG = true,
            action = toggleRecording( FLAG );
      expect( action.type ).toEqual( "TOGGLE_RECORDING" );
      expect( action.payload ).toEqual( { toggle: FLAG } );
    });
  });
});
