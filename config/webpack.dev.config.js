var configs = require('./webpack.base.config')
var plugins=require('./plugins.js')
var _ = require('lodash')

configs.forEach(function(config){
  config.plugins = _.concat(config.plugins,plugins.dev(config.language))
  //console.log(config.language+":"+JSON.stringify(plugins.dev(config.language)))
  config.devtool = 'eval-source-map'
})


module.exports = configs
