import { createStore } from "redux";
import { createAction, createReducer } from "redux-act";

export const toggleRecording = createAction( ( toggle ) => ({ toggle }) );
export const setActiveTab = createAction( ( activeTab ) => ({ activeTab }) );
export const setScreenshotFilename = createAction( ( filename ) => ({ filename }) );
export const setScreenshotInputError = createAction( ( msg ) => ({ msg }) );
export const setAnimationFilename = createAction( ( filename ) => ({ filename }) );
export const setAnimationInputError = createAction( ( msg ) => ({ msg }) );

