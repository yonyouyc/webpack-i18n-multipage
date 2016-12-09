var webpack = require('webpack')
var configs = require('./webpack.base.config')
var     ExtractTextPlugin = require("extract-text-webpack-plugin");
var plugins=require('./plugins.js')
configs.forEach(function(config) {
  config.plugins = plugins.prod
  config.module.loaders = [
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.css$|\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css!less')
    },
    {
      test: /\.html$/,
      loader: "html?config=otherHtmlLoaderConfig"
    }
  ]
});
module.exports = configs
