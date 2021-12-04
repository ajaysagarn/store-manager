const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");


module.exports = {
  entry: {
    main: "./src/index.js",
  },
  // output: {
  //   path: path.resolve(__dirname, "../resources/static/js"),
  //   publicPath: ASSET_PATH // necessary to get the CDN working correctly. publicPath (__webpack_public_path___) is overwritten at start of s&a to point to CDN.
  // },
  resolve: {
    modules: [
      "./node_modules",
      path.resolve("./src"),
      path.resolve("./")
    ],
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.tsx', '.ts','.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              ['@babel/plugin-transform-runtime']
            ]
          }
        }]
      },
      {
        test: /\.(png|PNG|jpg|JPG|gif|GIF|svg|SVG|cur|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|ico|md)(\?cl=0)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
  
      {
        test: /\.xml$/,
        use: [{
          loader: 'raw-loader'
        }]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(
      /^\.\/locale$/,
      /moment/,
      /\.eot$/,
      /\.ttf$/,
      /\.otf$/
    ), // Exclude moment locales in bundles (load explicitly in js file),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css' ,
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: "../home.html",
      inject: 'body'
    })
  ]
};
