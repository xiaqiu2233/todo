const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

// const devMode = process.env.NODE_ENV !== 'production'

/**
 * @param {String} env "development" or "production"
 */
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            hash: true,
        }), new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
            // {
            //     test: /\.less$/,
            //     use: [
            //         devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'less-loader'
            //     ]
            // },
            // {
            //     test: /\.css$/,
            //     use: [
            //         devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            //         'css-loader',
            //     ]
            // },
        ]
    },
};
