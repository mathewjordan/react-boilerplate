const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, "./resources/utk-lib-header/src/index.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "./resources/utk-lib-header/src/index.html"),
            filename: "./index.html"
        })
    ]
};