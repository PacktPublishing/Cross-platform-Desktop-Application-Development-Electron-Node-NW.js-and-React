import { createStore } from "redux";
import { createReducer } from "redux-act";
import * as Actions from "../Actions";
import { TAB_SCREENSHOT, SCREENSHOT_DEFAULT_FILENAME, ANIMATION_DEFAULT_FILENAME } from "../Constants";

const DEFAULT_STATE = {
  isRecording: false,
  activeTab: TAB_SCREENSHOT,
  screenshotFilename: SCREENSHOT_DEFAULT_FILENAME,
  animationFilename: ANIMATION_DEFAULT_FILENAME,
  screenshotInputError: "",
  animationInputError: ""
};

export const appReducer = createReducer({
  [ Actions.toggleRecording ]: ( state, action ) => ({ ...state, isRecording: action.toggle }),
  [ Actions.setActiveTab ]: ( state, action ) => ({ ...state, activeTab: action.activeTab }),
  [ Actions.setScreenshotFilename ]: ( state, action ) => ({ ...state, screenshotFilename: action.filename }),
  [ Actions.setScreenshotInputError ]: ( state, action ) => ({ ...state, screenshotInputError: action.msg }),
  [ Actions.setAnimationFilename ]: ( state, action ) => ({ ...state, animationFilename: action.filename }),
  [ Actions.setAnimationInputError ]: ( state, action ) => ({ ...state, animationInputError: action.msg })
}, DEFAULT_STATE );