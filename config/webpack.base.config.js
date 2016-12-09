var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
    path = require('path'),
    webpack = require('webpack'),
    _=require('lodash');
var I18nPlugin = require("i18n-webpack-plugin")

var basepath=process.cwd(),
    distpath= path.resolve(basepath,  "./dist");
var plugins=require('./plugins.js')
var languages = {
  "en": require("../locale/en/translate.json"),
  "zh": require("../locale/zh/translate.json")
};
var configs = Object.keys(languages).map(function(language) {
  return {
    cache: true,
    language: language,
    entry: plugins.entry,
    output: {
      path: distpath,
      publicPath: "/",
      filename: "[name]/index." + language + ".js"
    },
    module: {
      loaders: [
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
          loader: "style!css!less"
        }
        , {
          test: /\.html$/,
          loader: "html?config=otherHtmlLoaderConfig"
        }]
    },
    resolve: {},
    plugins: [
      new I18nPlugin(languages[language])
    ]
  }
});

module.exports = configs;