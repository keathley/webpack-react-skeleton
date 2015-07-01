var webpack      = require('webpack')
  , path         = require('path')
  , node_modules = path.resolve(__dirname, 'node_modules')
  , pathToReact  = path.resolve(node_modules, 'react/dist/react.min.js')
  , pathToLib    = path.resolve(node_modules, 'react/lib')
  // , pathToRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js')

// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [ 'webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js') ],
  resolve: {
    // alias: {
    //   'react/lib': pathToLib,
    //   'react': pathToReact
    // }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]//,
    // noParse: [ pathToLib, pathToReact ]//pathToLib, pathToReact] //, pathToRouter ]
  }
};
