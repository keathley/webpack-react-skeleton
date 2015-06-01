var webpack = require('webpack')
  , path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval!inline-source-map',
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
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel']
      },
      {
        test: /\.jsx$/,
        loaders: [ 'react-hot', 'babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!autoprefixer-loader!sass-loader'
        )
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
