"use strict";
const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devServer: {
		historyApiFallback: true,
		disableHostCheck: true,
		host: "0.0.0.0",
		publicPath: "/",
		proxy: {
			"/api/": {
				target: "http://stg-magazine.dingo.tv",
				secure: false,
				logLevel: "silent"
			}
		}
	},
	entry: [path.resolve("src/index.js")],
	output: {
		filename: "dist.[name].[hash].js",
		path: path.resolve("build"),
		pathinfo: true,
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				enforce: "pre",
				loader: require.resolve("eslint-loader"),
				include: path.resolve("src")
			},
			{
				test: /\.(js|jsx)$/,
				include: path.resolve("src"),
				loader: "babel-loader",
				options: {
					presets: ["stage-0", "react"]
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: ["file-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve("src/index.html")
		})
	]
};
