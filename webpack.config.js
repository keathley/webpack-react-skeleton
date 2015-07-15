var webpack        = require('webpack')
  , path           = require('path')
  , autoprefixer   = require('autoprefixer-core')
  , csswring       = require('csswring')
  , postcss_import = require('postcss-import')
  , postcss_vars   = require('postcss-simple-vars')

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './app/index.jsx'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js",
    publicPath: '/static'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'react-hot', 'babel' ],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
        // loader: ExtractTextPlugin.extract( 'css!postcss' )
      }
    ]
  },
  postcss: function() {
    return [
      postcss_import({
        onImport: function(files) { files.forEach(this.addDependency) }.bind(this)
      })
      , postcss_vars
      , autoprefixer
      , csswring
    ]
  },
  plugins: [
    // new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: [ 'app', 'app/styles/components', 'node_modules' ],
    extensions: ['', '.js', '.json', '.jsx']
  }
};
