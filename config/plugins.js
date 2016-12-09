var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    webpack = require('webpack'),
    getModels=require('./models'),
    _=require('lodash');

var basepath=process.cwd(),
    srcPath =path.resolve(basepath,  "./src");
var models=getModels();

//霸王协议1,index.js必须为唯一的入口文件
var entry=_.mapValues(models, function(value,key) {
            return srcPath+"/"+key+'/index.js';
        });
//霸王协议2,入口html,依然必须为index.html
var htmlPlugin=function(isDev, language){
  var entryHtml =  _.map(models, function(value,key) {

      return new HtmlWebpackPlugin({
        title: value,
        // css: [ "../../css/"+key+".css" ],
        //生成模板地址
        template: './src/' + key + '/index.html',
        filename: '/' + key + '/index.'+language+'.html',
        //要把script插入到标签里
        inject: true
      })
  })
    console.log("entryHtml:"+language+":"+JSON.stringify(entryHtml))
    return entryHtml;
}

module.exports ={
  entry:entry,
  dev: function(language) {
      return htmlPlugin(true, language)
  }
}
