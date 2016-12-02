var webpack = require('webpack');

module.exports = {
	entry : [
		'./src/index.js'
	],
	// edit path and filename to match the script you load in your view
	output: {
		path: __dirname + '/public/javascripts/',
		filename: 'bundle.js'
	},
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: [/node_modules/, /.+\.config.js/],
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};