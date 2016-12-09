var config = require('./webpack.base.config')
var plugins=require('./plugins.js')
config.devtool = 'eval-source-map'

config.plugins=plugins.dev;
config.devServer = {
  noInfo: true,
  hot: true,
  inline: true,
  proxy: {
    '/yuncai': {
          target: 'http://yc.yonyou.com',
          secure: false,
          changeOrigin: true,
          host: "yc.yonyou.com"
        },
    '/file1': {
          target: 'http://yc.yonyou.com',
          secure: false,
          changeOrigin: true,
          host: "yc.yonyou.com"
    },
    '/cpu-score': {
          target: 'http://172.20.4.39:9929',
          secure: false,
          changeOrigin: true,
          host: "172.20.4.39"
          //host: "10.1.80.38"
    },
    '/cpu-project-def': {
          target: 'http://172.20.4.38:9922',
          // target:'http://10.1.80.32:8090',
          secure: false,
          changeOrigin: true,
          host: "172.20.4.38"
        },
    '/cpu-supplierbid': {
          target: 'http://172.20.4.38:9924',
          secure: false,
          changeOrigin:true,
          host: '172.20.4.38'
        },
    '/cpu-biddoc': {
          target: 'http://172.20.4.38:9923',
          //target: 'http://10.1.80.35:8090',
          secure: false,
          changeOrigin: true,
          host: '172.20.4.38',
          //host: '10.1.80.35',
        },
    '/cpu-basedocrefer': {
          target: 'http://172.20.4.38:9925',
          secure: false,
          changeOrigin: true,
          host: '172.20.4.38'
        },
    '/cpu-pricedecision-web': {
          target: 'http://172.20.4.39:9906',
          secure: false,
          changeOrigin: true,
          host: '172.20.4.39'
      },
    '/cpu-bidopen': {
          target: 'http://172.20.4.39:9927',
          secure: false,
          changeOrigin: true,
          host: '172.20.4.39',
      },
    '/cpu-expert': {
          target: 'http://172.20.4.38:9926',
          secure: false,
          changeOrigin: true,
          host: '172.20.4.38',
      },
    '/contract': {
          target: 'http://172.20.4.39:9928',
          //target: 'http://10.1.80.46:9999/',
          secure: false,
          changeOrigin: true,
          //host: '10.1.80.46',
          host: '172.20.4.39',
      },
    '/cpu-bidnotice': {
          target: 'http://172.20.4.39:9930',
          //target: 'http://10.1.80.24:9999/',
          secure: false,
          changeOrigin: true,
          //host: '10.1.80.24',
          host: '172.20.4.39',
      },
  }
}

module.exports = config
