module.exports = {
	entry: './src/cssDraw.js',
	//entry: './src/primitive.js',
	output: {
		path: './docs/dist',
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