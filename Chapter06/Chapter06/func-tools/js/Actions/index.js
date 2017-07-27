import { createStore } from "redux";
import { createAction, createReducer } from "redux-act";

export const toggleRecording = createAction( "TOGGLE_RECORDING", ( toggle ) => ({ toggle }) );
export const setActiveTab = createAction( "SET_ACTIVE_TAB", ( activeTab ) => ({ activeTab }) );
export const setScreenshotFilename = createAction( "SET_SCREENSHOT_FILENAME", ( filename ) => ({ filename }) );
export const setScreenshotInputError = createAction( "SET_SCREENSHOT_INPUT_ERROR", ( msg ) => ({ msg }) );
export const setAnimationFilename = createAction( "SET_ANIMATION_FILENAME", ( filename ) => ({ filename }) );
export const setAnimationInputError = createAction( "SET_ANIMATION_INPUT_ERROR", ( msg ) => ({ msg }) );
