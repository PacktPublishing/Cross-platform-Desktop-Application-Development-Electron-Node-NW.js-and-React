/// <reference path="./feedme" />
import http = require( "http" );
var FeedMe = require( "feedme" );

http.get('http://feeds.feedburner.com/TechCrunch/startups', ( res ) => {
  const parser = new FeedMe( true );
  parser.on( "title", ( title: string ) => {
    console.log( title );
  });
  res.pipe( parser );
});

