const merge = require('webpack-merge');
const path = require("path");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../../resources/static/js'),
    publicPath: '/js/'
  },
  mode: 'development',
});