import { IAppState, IMenuRssPayload } from "../Interfaces";
import * as vo from "../Constants";

import { handleActions, Action } from "redux-actions";

const defaultState: IAppState = {
  isOpenAddFeed: false,
  menu: [],
  items: [],
  feedError: "",
  activeFeedUrl: ""
};

const app = handleActions<IAppState>({

  [ vo.TOGGLE_ADD_FEED ]: ( state, action ) => ({
    ...state, isOpenAddFeed: action.payload
  }),

  [ vo.ADD_FEED ]: ( state, action ) => {
    if ( action.error ) {
      return { ...state, feedError: `Cannot add feed: ${action.payload}` };
    }
    return { ...state, feedError: "", isOpenAddFeed: false, menu: action.payload };
  },

  [ vo.SET_FEED_ERROR ]: ( state, action ) => ({
    ...state, feedError: action.payload
  }),

  [ vo.REMOVE_FEED ]: ( state, action ) => {
    if ( action.error ) {
      return { ...state, feedError: `Cannot remove feed: ${action.payload}` };
    }
    return { ...state, menu: action.payload };
  },


  [ vo.FETCH_MENU ]: ( state, action: Action<IMenuRssPayload> ) => {
    if ( action.error ) {
      return { ...state, feedError: `Cannot fetch menu: ${action.payload}` };
    }
    return {
      ...state,
      menu: action.payload.menuItems,
      items: action.payload.rssItems,
      activeFeedUrl: ""
    };
  },

  [ vo.FETCH_FEED ]: ( state, action ) => {
    if ( action.error ) {
      return { ...state, feedError: `Cannot fetch feed: ${action.payload}` };
    }
     return {
      ...state,
      items: action.payload.items
    };
  },

  [ vo.SET_ACTIVE_FEED ]: ( state, action ) => ({
    ...state, activeFeedUrl: action.payload
  })


}, defaultState );

export default app;


