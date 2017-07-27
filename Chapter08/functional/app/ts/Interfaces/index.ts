import { Action } from "redux-actions";
import { IRssItem, IFeed } from "./Rss";
export * from "./Rss";

export interface IMenuItem {
  url: string;
  title: string;
  id: string;
}

export interface IAppState {
  isOpenAddFeed: boolean;
  menu: IMenuItem[];
  items: IRssItem[];
  feedError: string;
  activeFeedUrl: string;
}

export interface IRootState {
  state: IAppState;
}

export type TStore = IRootState & IAppActions;


export interface IAppActions {
  toggleOpenAddFeed: ( toggle: boolean ) => Action<boolean>;
  setActiveFeed:  ( url: string ) => Action<string>;
  setFeedError: ( msg: string ) => Action<string>;
  fetchMenu: () => Promise<IMenuRssPayload>;
  addFeed: ( url: string ) => Promise<IMenuItem[]>;
  removeFeed: ( url: string ) => Promise<IMenuItem[]>;
  fetchFeed: ( url: string ) => Promise<IFeed>;
  key?: any;
}

export interface IMenuRssPayload {
  menuItems: IMenuItem[];
  rssItems: IRssItem[];
}
