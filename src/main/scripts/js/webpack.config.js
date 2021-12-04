const  merge = require('webpack-merge');
const path = require("path");
const common = require('./webpack.common.js');


module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../dist/js'),
    publicPath: '/js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    proxy: {
      '/api': 'http://localhost:8085',
    },
    index: 'home.html',
    devServer: {
      contentBase: path.resolve(__dirname, "../dist/js"),
      publicPath: "/", //should provide the path of the served js , img , etc...
    },
    compress: true,
    port: 9000,
  },
});