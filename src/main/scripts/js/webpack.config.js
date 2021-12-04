const  merge = require('webpack-merge');
const path = require("path");
const common = require('./webpack.common.js');


module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    proxy: {
      '/api': 'http://localhost:8085',
    },
    index: 'home.html',
    publicPath: '/',
    compress: true,
    port: 9000,
  },
});