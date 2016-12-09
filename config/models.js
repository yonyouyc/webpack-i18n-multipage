var fs = require('fs'),
    models=require('./models.json')

var basepath=process.cwd(),
    srcPath =basepath+ './src';
/**
 * 配置加载的模块
 * 独立的模块包含额外的信息,比如title
 */
function getEntry() {
    var dirs = fs.readdirSync(srcPath);
    var files = {};
    dirs.forEach(function (item) {
        //霸王协议->模块入口必须为index。js
        files[item] = srcPath+item+'index.js';
    });
    return files;
}




module.exports = function(flag){

  return models;
}