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
						'compact': false,
						'minified': false,
						'shouldPrintComment': (txt) => /Copyright/.test(txt),
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
	'optimization': {
		'minimizer': [
			new TerserPlugin({
				'test': /\.min\.js$/,
				'parallel': true
			})
		]
	},
	externals: {
		'bootstrap': 'bootstrap'
	}
};

/*--------------------------------------------------------------------------------------------------------------------*/
