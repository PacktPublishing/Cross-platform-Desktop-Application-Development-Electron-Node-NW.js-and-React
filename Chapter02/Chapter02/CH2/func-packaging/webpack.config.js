const { join } = require( "path" ),
      webpack = require( "webpack" );

module.exports = {
  entry: join( __dirname, "src/js/app.js" ),
  target: "node-webkit",
  output: {
      path: join( __dirname, "app" ),
      filename:  "bundle.js"
  }
};
