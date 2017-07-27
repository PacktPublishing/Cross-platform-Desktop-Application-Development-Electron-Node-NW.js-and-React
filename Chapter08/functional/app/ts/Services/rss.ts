import { IRssItem, IFeed } from "../Interfaces";
import { IFeedMe } from "./IFeedMe";
import * as request from "request";
const FeedMe: IFeedMe = require( "feedme" );

export default function rss( feedUrl: string ): Promise<IFeed> {
  const feed: IFeed = {
          title: "",
          items: []
        };
  return new Promise<IFeed>(( resolve, reject ) => {
    request.get( feedUrl ).on( "response", ( res: NodeJS.ReadableStream ) => {
        const parser = new FeedMe( true );
        parser.on( "title", ( title: string ) => {
          feed.title = title;
        });
        parser.on( "item", ( item: IRssItem ) => {
          feed.items.push( item );
        });
        res.pipe( parser );
        parser.on( "error", ( err: Error ) => {
          reject( err );
        });
        res.on( "error", ( err: Error ) => {
          reject( err );
        });
        res.on( "end", () => {
          resolve( feed );
        });
    });

  });
}
