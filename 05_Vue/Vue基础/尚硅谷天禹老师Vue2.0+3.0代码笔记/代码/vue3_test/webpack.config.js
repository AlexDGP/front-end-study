/**
 * @name: webpack.config
 * @author: AlexDGP-Office
 * @date: 2023-03-01 11:11
 * @description：webpack.config
 * @update: 2023-03-01 11:11
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 匹配所有 .js 文件
                exclude: /node_modules/, // 排除 node_modules 文件夹
                use: {
                    loader: 'babel-loader', // 使用 babel-loader 处理 .js 文件
                    options: {
                        presets: ['@babel/preset-env'], // 使用 @babel/preset-env 预设
                    },
                },
            },
        ],
    },
};
