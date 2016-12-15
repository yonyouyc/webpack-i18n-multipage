var configs = require('./webpack.base.config')
var plugins=require('./plugins.js')

configs.forEach(function(config){
  config.plugins = config.plugins.concat(plugins.dev(config.language))
  config.devtool = 'eval-source-map'
})
module.exports = configs
