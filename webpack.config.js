var isProd               = process.env.NODE_ENV === 'production'
  , webpack              = require('webpack')
  , path                 = require('path')
  , autoprefixer         = require('autoprefixer-core')
  , csswring             = require('csswring')
  , postcss_import       = require('postcss-import')
  , postcss_vars         = require('postcss-simple-vars')
  , postcss_custom_media = require('postcss-custom-media')
  , postcss_calc         = require('postcss-calc')
  , postcss_mixins       = require('postcss-mixins')
  , postcss_nested       = require('postcss-nested')
  , package              = require('./package.json')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')

var cssLoaders = 'style!css!postcss'

function extract(loaders) {
  return ExtractTextPlugin.extract('style',  loaders.substr(loaders.indexOf('!')))
}

var entry = isProd ? {
  app: './app/index.jsx',
  vendors: [ 'react', 'react-router' ] //, 'lodash']
} : {
  app: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './app/index.jsx'
  ]
}

module.exports = {
  debug: !isProd,
  devtool: 'eval',
  entry: entry,
  output: {
    path: isProd ? __dirname + '/dist' : __dirname + '/build',
    publicPath: isProd ? '' : 'http://localhost:3000/',
    filename: isProd ? '[name].[chunkhash].js' : 'app.js',
    chunkFilename: isProd ? '[chunkhash].js' : '[id].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: (isProd ? [] : [ 'react-hot' ]).concat([ 'babel' ]),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: isProd ? extract(cssLoaders) : cssLoaders
      },
      {
        test: /\.png$/,
        loader: "url?limit=100000&mimetype=image/png",
      },
      {
        test: /\.svg$/,
        loader: "url?limit=100000&mimetype=image/svg+xml",
      },
      {
        test: /\.gif$/,
        loader: "url?limit=100000&mimetype=image/gif",
      },
      {
        test: /\.jpg$/,
        loader: "file",
      }
    ]
  },
  postcss: function() {
    return [
      postcss_import({
        onImport: function(files) { files.forEach(this.addDependency) }.bind(this)
      })
      , postcss_vars
      , postcss_calc
      , postcss_custom_media
      , postcss_mixins
      , postcss_nested
      , autoprefixer
      , csswring
    ]
  },
  plugins: isProd ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.optimize.CommonsChunkPlugin('vendors', '[name].[chunkhash].js'),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new HtmlWebpackPlugin({
      title: package.name,
      template: './conf/tmpl.html',
      production: isProd
    })
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: package.name,
      template: './conf/tmpl.html'
    })
  ],
  resolve: {
    modulesDirectories: [ 'app', 'app/styles/components', 'node_modules' ],
    extensions: ['', '.js', '.json', '.jsx', '.css']
  }
};
