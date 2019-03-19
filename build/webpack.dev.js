const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    resolve:{
        extensions: [".js", ".vue"]
    },
    module: {
        rules: [
            // {
            //     test: /\.less$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader',
            //         'less-loader'
            //     ]
            // },
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    }
});