const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./js/app.js', './sass/app.sass'],
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: 'js/app.min.js',
	},
	module: {
		rules: [{
			test: /(\.css|\.scss|\.sass)$/,
			use: [{
					loader: 'file-loader',
					options: {
						name: 'css/[name].min.css',
					}
				},
				{
					loader: 'extract-loader'
				},
				{
					loader: 'css-loader?-url'
				},
				{
					loader: 'postcss-loader'
				},
				{
					loader: 'sass-loader'
				}
			]
		}]
	}
};