var webpack = require('webpack');
var path = require('path');

module.exports = { 
	devtool: 'inline-source-map',
	entry: [
		'./src/app.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js', '.jsx', '.css']
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
		},
		{
			test: /\.json$/,
			loader: "json-loader"
		},
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},
	    { 
	        test: /\.png$/, 
	        loader: "url-loader?limit=100000" 
	    },
	    { 
	        test: /\.jpg$/, 
	        loader: "file-loader" 
	    },
	    {
	        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&mimetype=application/font-woff"
	    },
	    {
	        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
	        loader: 'file-loader'
	    },
	    {
	        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
	        loader: 'file'
	    },
	    {
	        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
	        loader: 'url?limit=10000&mimetype=image/svg+xml'
	    },
	    { 
	    	test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' 
	    }

		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),

		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})

	]

};