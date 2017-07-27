const path = require( "path" );
module.exports = {
    entry: "./app/ts/index.tsx",
    output: {
			path: path.resolve( __dirname, "./app/build/js/" ),
			filename: "bundle.js"
    },

		target: "electron-renderer",

		resolve: {
			modules: [
      "node_modules",
      path.resolve(__dirname, "app/ts"),
      path.resolve(__dirname, "app/sass")
    ],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".ts", ".tsx", ".js", ".scss", ".css"]
    },

		devtool: "source-map", // enum
    module: {
			rules: [
				{
					// All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
					test: /\.tsx?$/,
					use: "ts-loader"
				},
        {
					test: /\.css$/,
					use: [
							"style-loader",
							"css-loader"
						]
				},
				{
					test: /\.scss$/,
					use: [
							"style-loader",
							"css-loader",
              "sass-loader"
						]
				},
        {
           test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
           use: {
             loader: "url-loader",
             options: {
               limit: 1000000,
               mimetype: "application/font-woff"
             }
           }
        }
			]
		}
};