declare class FeedMe {
  new ( flag?: boolean ): NodeJS.WritableStream;
  on( event: "title", onTitle: ( title: string ) => void): void;
  on( event: "item", onItem: ( item: any ) => void ): void;
}
