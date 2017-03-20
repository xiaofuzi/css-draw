module.exports = {
	entry: './src/cssDraw.js',
	output: {
		path: './dist',
		filename: '[name].js'
	},
	module: {
		loaders: [
		  {
		    test: /\.js$/,
		    exclude: /(node_modules)/,
		    loader: 'babel-loader'
		  }
		]
	},
	devtool: '#eval-source-map'
}