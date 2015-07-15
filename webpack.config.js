var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname + '/src',
	entry: './app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.html$/, loader: 'raw',  exclude: /node_modules/},
			{test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader'), exclude: /node_modules/}
		]
	},
	 plugins: [
        new ExtractTextPlugin("base.css")
    ]
};