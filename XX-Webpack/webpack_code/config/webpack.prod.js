const path = require("path");
const os = require("os");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

// css兼容性处理
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
const threads = os.cpus().length; // cps核心数

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"), // Set path directory
    filename: "static/js/main.js", // Set output path
    clean: true, // Clean path directory before bundling
  },
  module: {
    rules: [
      {
        oneOf: [
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
            use: [
              {
                loader: "thread-loader",
                options: {
                  works: threads,
                },
              },
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true, //开启babel缓存
                  cacheCompression: false, //关闭缓存压缩
                  plugins: ["@babel/plugin-transform-runtime"],
                  // 	presets: ["@babel/preset-env"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname, "../src"),
      exclude: "node_modules", // 默认值
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/eslintCache",
      ),
      threads, // 开启多进程
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/main.css",
    }),
    // new CssMinimizerPlugin(),
    // new TerserWebpackPlugin({
    //   parallel: threads, // 开启多进程
    // }),
  ],
  optimization: {
    // 压缩操作
    minimizer: [
      // 压缩css
      new CssMinimizerPlugin(),
      // 压缩js
      new TerserWebpackPlugin({
        parallel: threads, // 开启多进程
      }),
    ],
  },
  mode: "production",
  devtool: "source-map",
};
