var webpack = require('webpack')
  , path = require('path')
  , node_modules = path.resolve(__dirname, 'node_modules')
  , reactPath = path.resolve(node_modules, 'react/dist/react.min.js')
  , reactRouterPath = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js')
  , reactLibPath = path.resolve(node_modules, 'react/lib');

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
        exclude: /node_modules/,
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
    ],
    noParse: [reactPath, reactRouterPath, reactLibPath]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: [ 'app', 'app/styles/components', 'node_modules' ],
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss'],
    alias: {
      'react/lib': reactLibPath,
      'react': reactPath,
      'react-router': reactRouterPath

    }
  }
};
