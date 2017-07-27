const { join } = require( "path" ),
      webpack = require( "webpack" );
      BUILD_DIR = join( __dirname, "app/build" ),
      APP_DIR = join( __dirname, "app/js" );


module.exports = {
  entry: join( APP_DIR, "renderer.jsx" ),
  target: "electron-renderer",
  devtool: "source-map",
  output: {
      path: BUILD_DIR,
      filename:  "renderer.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [ "es2017", "react" ],
            plugins: [ "transform-class-properties", "transform-object-rest-spread" ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "./build/"
            }
        }]
      }
    ]
  }
};
