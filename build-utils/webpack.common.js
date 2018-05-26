const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPaths = require('./common-paths');

const config = {
  entry: './src/',
  output: {
    path: commonPaths.outputPath,
    filename: '[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jpe?g/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin()
  ]
};

module.exports = config;