const  merge = require('webpack-merge');
const path = require("path");
const common = require('./webpack.common.js');


module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, './public/js'),
    publicPath: '/js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  
  devServer: {
    devMiddleware: {
      writeToDisk: true,
      publicPath: '/public',
      index: 'home.html'
    },
    proxy: {
      '/api': 'http://localhost:8085',
    },
    historyApiFallback: {
      index: 'home.html'
    },
    compress: true,
    port: 9000,
  },
});