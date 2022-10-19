const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	entry: "./src/main.js",
	output: {
		// path: path.resolve(__dirname, "../dist"),
		path: undefined,
		filename: "static/js/main.js", // Set output path
	},
	module: {
		rules: [
			// css-loader
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			// scss-loader
			{
				test: /\.s[ac]ss$/i,
				use: [
					// 将 JS 字符串生成为 style 节点
					MiniCssExtractPlugin.loader,
					// 将 CSS 转化成 CommonJS 模块
					"css-loader",
					// 将 Sass 编译成 CSS
					"sass-loader",
				],
			},
			// resource-loader
			{
				test: /\.(png|jpe?g|gif|wepb|svg)$/,
				type: "asset",
				parser: {
					dataUrlCondition: {
						// Resource's size less than Max Size will be parsed into data:resource;base64.
						// Advantage: It can reduce request for fetching resource.
						// Disadvantage: Size of resource will increase.
						maxSize: 10 * 1024, // 10kb
					},
				},
				// Set generate directory
				generator: {
					// [hash:10] set filename character size to be 10.
					filename: "static/images/[hash:10][ext][query]",
				},
			},
			// resource-loader
			{
				test: /\.(ttf|woff2?|map3|mp4|avi)$/,
				type: "asset/resource",
				// Set generate directory
				generator: {
					// [hash:10] set filename character size to be 10.
					filename: "static/media/[hash:10][ext][query]",
				},
			},
			// babel-loader
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					// options: {
					// 	presets: ["@babel/preset-env"],
					// },
				},
			},
		],
	},
	plugins: [
		new ESLintPlugin({
			context: path.resolve(__dirname, "../src"),
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
		}),
		new MiniCssExtractPlugin(),
	],
	devServer: {
		host: "127.0.0.1",
		port: "3000",
		open: true,
	},
	mode: "development",
	devtool: "cheap-module-source-map",
};
