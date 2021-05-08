const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve('./', './dist'),
        filename: '[name].[contenthash].js'
    },

    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        template: 'src/assets/index.html'

    }), ],


};