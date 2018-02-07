const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: "cheap-module-eval-source-map",
	entry: [
		// 'webpack-hot-middleware/client',
		"babel-polyfill",
		path.join(__dirname, "./app/index")
	],
	output: {
		path: path.join(__dirname, "./public"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					"style-loader",
					"css-loader?sourceMap",
					{
						loader: "autoprefixer-loader",
						options: {
							browsers: "last 2 version"
						}
					},
					"less-loader?sourceMap"
				]
			},
			// {
      //
			// 		test: /\.ejs$/,
			// 		exclude: /node_modules/,
			// 		use: [
			// 			{
			// 				loader: 'ejs-html-loader'
			// 			}
			// 		]
			// },

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							plugins: ["transform-decorators-legacy"],
							presets: ["es2015", "stage-0"]
						}
					}
				]
			},
			{
				test: /\.json$/,
				use: ["json-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "[DEV] My App",
			template: '!!ejs-compiled-loader!app/index.ejs',
			filename: "index.html"
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development"),
				PLATFORM_ENV: JSON.stringify("web")
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin()
	]
};
