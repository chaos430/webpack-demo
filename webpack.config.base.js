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
    module: {



        rules: [

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "stylus-loader"], // compiles Styl to CSS
            },

            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
            },


            {
                test: /\.scss$/i,
                use: [

                    "style-loader",

                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    }

                ],
            },
        ],
    },


};