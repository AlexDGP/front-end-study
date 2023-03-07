const path = require("path");
const os = require("os");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");

const threads = os.cpus().length;

const postcssLoader = {
	loader: "postcss-loader",
	options: {
		postcssOptions: {
			plugins: [
				"postcss-preset-env", // Set postcss-loader's preset
			],
		},
	},
};

module.exports = {
	entry: "./src/main.js",
	output: {
		// [contenthash:8]使用contenthash，取8位长度
		filename: "static/js/[name].[contenthash:8].js", // 入口文件打包输出资源命名方式
		chunkFilename: "static/js/[name].[contenthash:8].chunk.js", // 动态导入输出资源命名方式
		assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash）
		clean: true,
	},
	module: {
		rules: [
			{
				oneOf: [
					{
						test: /\.css$/i,
						use: [MiniCssExtractPlugin.loader, "css-loader", postcssLoader],
					},
					{
						test: /\.s[ac]ss$/i,
						use: [
							MiniCssExtractPlugin.loader,
							"css-loader",
							postcssLoader,
							"sass-loader",
						],
					},
					{
						test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
						type: "asset",
						parser: {
							dataUrlCondition: {
								maxSize: 10 * 1024,
							},
						},
						// generator: {
						// 	filename: "static/imgs/[hash:8][ext][query]",
						// },
					},
					{
						test: /\.(ttf|woff|woff2|mp3|mp4|avi)$/i,
						type: "asset/resource",
						// generator: {
						// 	filename: "static/media/[hash:8][ext][query]",
						// },
					},
					{
						test: /\.js$/,
						// exclude: /node_modules/, // or use include
						include: path.resolve(__dirname, "../src"),
						use: [
							{
								loader: "thread-loader", // Turn on multi-threads
								options: {
									workers: threads, // Set amount of threads
								},
							},
							{
								loader: "babel-loader",
								options: {
									cacheDirectory: true, // Turn on caching
									cacheCompression: false, // Do not compress cache
									plugins: ["@babel/plugin-transform-runtime"], // Reduce size of source code
								},
							},
						],
					},
				],
			},
		],
	},
	plugins: [
		new ESLintWebpackPlugin({
			context: path.resolve(__dirname, "../src"),
			exclude: "node_modules", // default value
			cache: true, // Turn on caching
			// Set cache directory path
			cacheLocation: path.resolve(
				__dirname,
				"../node_modules/.cache/.eslintcache"
			),
			threads, // Turn on multi-threads
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
		}),
		new MiniCssExtractPlugin({
			filename: "static/css/[name].[contenthash:8].css",
			chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
		}),
		// new CssMinimizerPlugin(),
		new PreloadWebpackPlugin({
			rel: "preload", // preload兼容性更好
			as: "script",
			// rel: 'prefetch' // prefetch兼容性更差
		}),
	],

	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(), // CssMinimizerPlugin also can be written in optimization.minimizer, it do  the same effect.
			// When production mode, webpack turns on TerserPlugin by default. If we need to configure it, we should new TerserPlugin and give it options.
			new TerserPlugin({
				parallel: threads, // Turn on multi-threads
			}),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminGenerate,
					options: {
						plugins: [
							["gifsicle", { interlaced: true }],
							["jpegtran", { progressive: true }],
							["optipng", { optimizationLevel: 5 }],
							[
								"svgo",
								{
									plugins: [
										"preset-default",
										"prefixIds",
										{
											name: "sortAttrs",
											params: {
												xmlnsOrder: "alphabetical",
											},
										},
									],
								},
							],
						],
					},
				},
			}),
		],
		// Code split
		splitChunks: {
			chunks: "all", // Split all code
			// other configure set to be default
		},
		// 提取runtime文件
		runtimeChunk: {
			name: (entrypoint) => `runtime~${entrypoint.name}`, // runtime文件命名规则
		},
	},
	mode: "production",
	devtool: "source-map",
};
