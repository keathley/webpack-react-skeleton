var webpack = require('webpack')
  , path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
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
          'style',
          'css?sourceMap!'
          + 'autoprefixer!'
          + 'ruby-sass?sourceMap&'
            + 'outputStyle=expanded'
        )
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: [ 'app', 'app/styles/components', 'node_modules' ],
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
  }
};
