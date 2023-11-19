const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/main.js",
	output: {
		path: undefined,
		filename: "static/js/main.js",
		clean: true,
	},
	module: {
		rules: [
			{
				oneOf: [
					{
						test: /\.css$/i,
						use: ["style-loader", "css-loader"],
					},
					{
						test: /\.s[ac]ss$/i,
						use: ["style-loader", "css-loader", "sass-loader"],
					},
					{
						test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
						type: "asset",
						parser: {
							dataUrlCondition: {
								maxSize: 10 * 1024,
							},
						},
						generator: {
							filename: "static/imgs/[hash:8][ext][query]",
						},
					},
					{
						test: /\.(ttf|woff|woff2|mp3|mp4|avi)$/i,
						type: "asset/resource",
						generator: {
							filename: "static/media/[hash:8][ext][query]",
						},
					},
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: "babel-loader",
					},
				],
			},
		],
	},
	plugins: [
		new ESLintWebpackPlugin({
			context: path.resolve(__dirname, "../src"),
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
		}),
	],
	mode: "development",
	devServer: {
		host: "127.0.0.1",
		port: "3000",
		open: true,
		hot: true,
	},
	devtool: "cheap-module-source-map",
};
