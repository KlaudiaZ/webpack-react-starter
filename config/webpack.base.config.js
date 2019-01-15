const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../src");

module.exports = env => {
	const { PLATFORM, VERSION } = env;
	return merge([
		{
			entry: ["@babel/polyfill", APP_DIR],
			devtool: 'inline-source-map',
			module: {
				rules: [
					{
						test: /\.js$|\.jsx$/,
						exclude: /node_modules/,
						use: {
							loader: "babel-loader"
						}
					},
					{
						test: /\.scss$/,
						use: [
							PLATFORM === "production"
								? MiniCssExtractPlugin.loader
								: "style-loader",
							"css-loader",
							"sass-loader"
						]
					}
				]
			},
			resolve: {
				extensions: [".js", ".jsx"],
				alias: {
					App: path.resolve(__dirname, "../src/app")
				}
			},
			plugins: [
				new CopyWebpackPlugin([{ from: "src/static" }]),
				new HtmlWebpackPlugin({
					template: "./src/index.html",
					filename: "./index.html"
				}),
				new webpack.DefinePlugin({
					"process.env.VERSION": JSON.stringify(env.VERSION),
					"process.env.PLATFORM": JSON.stringify(env.PLATFORM)
				})
			]
		}
	]);
};
