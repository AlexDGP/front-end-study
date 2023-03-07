const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const loader = {
	loader: "postcss-loader",
	options: {
		postcssOptions: {
			plugins: [
				[
					"postcss-preset-env",
					{
						// 其他选项
					},
				],
			],
		},
	},
};

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "../dist"), // Set path directory
		filename: "static/js/main.js", // Set output path
		clean: true, // Clean path directory before bundling
	},
	module: {
		rules: [
			// css-loader
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", loader],
			},
			// scss-loader
			{
				test: /\.s[ac]ss$/i,
				use: [
					// 将 JS 字符串生成为 style 节点
					MiniCssExtractPlugin.loader,
					// 将 CSS 转化成 CommonJS 模块
					"css-loader",
					loader,
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
		new MiniCssExtractPlugin({
			filename: "static/css/main.css",
		}),
		new CssMinimizerPlugin(),
	],
	mode: "production",
	devtool: "source-map",
};
