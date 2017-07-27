const { join } = require( "path" ),
      webpack = require( "webpack" );
      BUILD_DIR = join( __dirname, "build" ),
      APP_DIR = join( __dirname, "js" );


module.exports = {
  entry: join( APP_DIR, "app.jsx" ),
  target: "node-webkit",
  devtool: "source-map",
  output: {
      path: BUILD_DIR,
      filename:  "app.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [ "es2017", "react", "stage-3" ],
            plugins: [ "transform-class-properties", "transform-decorators-legacy" ]
          }
        }]
      }
    ]
  }
};
