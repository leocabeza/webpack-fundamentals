const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    new CleanWebpackPlugin(['dist'], { verbose: true, root: commonPaths.rootPath }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin()
  ]
};

module.exports = config;