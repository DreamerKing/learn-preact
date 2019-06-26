const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name][hash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    plugins: [
         new HtmlWebpackPlugin({
                template: "./template.html",
                filename: "index.html",
               // favicon: "./favicon.ico",
               // title: pkg.name
            }),
    ],
    devServer: {
        open: true,
        port: 8888
    }
}