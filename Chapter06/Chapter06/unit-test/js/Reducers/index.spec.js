import { createStore } from "redux";
import { createReducer } from "redux-act";
import { toggleRecording } from "../Actions";
import { TAB_SCREENSHOT, SCREENSHOT_DEFAULT_FILENAME, ANIMATION_DEFAULT_FILENAME } from "../Constants";
import { appReducer } from "./index";

describe( "appReducer", () => {
  it( "should return default state", () => {
    const DEFAULT_STATE = {
      isRecording: false,
      activeTab: TAB_SCREENSHOT,
      screenshotFilename: SCREENSHOT_DEFAULT_FILENAME,
      animationFilename: ANIMATION_DEFAULT_FILENAME,
      screenshotInputError: "",
      animationInputError: ""
    };
    expect( appReducer() ).toEqual( DEFAULT_STATE );
  });

  it( "should return a new state for toggleRecording action", () => {
    const FLAG = true,
          action = toggleRecording( FLAG ),
          newState = appReducer( undefined, action );
    expect( newState.isRecording ).toEqual( FLAG );
  });
});

