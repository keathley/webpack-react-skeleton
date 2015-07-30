var webpackConfig = require('./webpack.config.js')

module.exports = function(config) {
  config.set({
    browsers: [ 'Chrome' ],

    singleRun: false,

    frameworks: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack' ]
    },

    reporters: [ 'mocha' ],

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }

  })
}
