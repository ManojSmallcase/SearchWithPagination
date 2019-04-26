const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    inline: true,
    port: 8008
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'API_ENDPOINT': JSON.stringify('https://search-word-api.herokuapp.com'),
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
      }
    ]
  }
});
