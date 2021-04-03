/*--------------------------------------------------------------------------------------------------------------------*/

const PACKAGE = require('./package.json');

/*--------------------------------------------------------------------------------------------------------------------*/

const BANNER = `bootstrap-5-dialog ` + PACKAGE.version + `, dialog boxes for Bootstrap 5
https://github.com/jodier/bootstrap-5-dialog
Copyright (c) 2020-` + new Date().getFullYear() + ` Jérôme Odier`;

/*--------------------------------------------------------------------------------------------------------------------*/

const BROWSER_LIST = [
	">= 1%",
	"last 1 major version",
	"not dead",
	"Chrome >= 45",
	"Firefox >= 38",
	"Edge >= 12",
	"Explorer >= 10",
	"iOS >= 9",
	"Safari >= 9",
	"Android >= 4.4",
	"Opera >= 30"
];

/*--------------------------------------------------------------------------------------------------------------------*/

console.log("Building bootstrap-5-dialog for: " + BROWSER_LIST.join(", "));

/*--------------------------------------------------------------------------------------------------------------------*/

const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

/*--------------------------------------------------------------------------------------------------------------------*/

module.exports = {
	'entry': {
		'bootstrap-5-dialog': path.resolve(__dirname, 'src/dialog.js'),
		'bootstrap-5-dialog.min': path.resolve(__dirname, 'src/dialog.js')
	},
	'output': {
		'path': path.resolve(__dirname, 'dist'),
		'filename': '[name].js'
	},
	'module': {
		'rules': [
			/*--------------------------------------------------------------------------------------------------------*/

			{
				'test': /\.js$/,
				'exclude': /node_modules/,
				'use': {
					'loader': 'babel-loader',
					'options': {
						'comments': false,
						'compact': false,
						'minified': false,
						'presets': [
							['@babel/preset-env', {
								'targets': {
									"browsers": BROWSER_LIST
								}
							}]
						]
					}
				}
			}

			/*--------------------------------------------------------------------------------------------------------*/
		]
	},
	'externals': {
		'bootstrap': 'bootstrap'
	},
	'plugins': [
		new webpack.BannerPlugin({
			'banner': BANNER
		})
	],
	'optimization': {
		'minimizer': [
			new TerserPlugin({
				'test': /\.min\.js$/,
				'parallel': true,
				'extractComments': false,
				'terserOptions': {
					'format': {
						'comments': /Copyright/,
					}
				}
			})
		]
	}
};

/*--------------------------------------------------------------------------------------------------------------------*/
