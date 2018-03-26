const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const extractLess = new ExtractTextPlugin({
	filename: '[name]_[contenthash].css',
	disable: process.env.NODE_ENV === 'development'
});

module.exports = {
	entry: {
		app: ['babel-polyfill', path.join(__dirname, './app/index')]
	},
	output: {
		path: path.join(__dirname, './public/'),
		filename: '[name].[chunkhash].js',
		publicPath: './'
	},
	resolve: {
		alias: {
			jquery: path.resolve('./node_modules/jquery')
		}
	},
	module: {
		rules: [
			// take all less files, compile them, and bundle them in with our js bundle
			{
				test: /\.less$/,
				use: extractLess.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true
								}
							},
							{
							loader: 'autoprefixer-loader',
							options: {
								browsers: ['last 2 version', 'iOS >= 8']
							}
						},
						'less-loader'
					]
				})
				// use: [
				//   'style-loader',
				//   'css-loader',
				//   {
				//     loader: 'autoprefixer-loader',
				//     options: {
				//       browsers: 'last 2 version'
				//     }
				//   },
				//   'less-loader'
				// ],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: ['transform-decorators-legacy'],
							presets: ['es2015', 'stage-0']
						}
					}
				]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	plugins: [
		extractLess,
		new HtmlWebpackPlugin({
			title: 'Mediasniper',
			template: '!!ejs-compiled-loader!app/index.ejs',
			filename: 'index.html',
			minify: {
				collapseWhitespace: true,
				minifyCSS: true
			},
			files: {
				css: ['main.[hash].css']
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				// Useful to reduce the size of client-side libraries, e.g. react
				NODE_ENV: JSON.stringify('production'),
				PLATFORM_ENV: JSON.stringify('web')
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: ({ resource }) =>
				// console.log(resource);
				/node_modules/.test(resource)

			// minChunks: ({ resource }) => usedModulesRegExp.test(resource)
		}),
		// new DuplicatePackageCheckerPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};
