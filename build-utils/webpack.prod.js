const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

const normalCss = new ExtractTextWebpackPlugin('styles.css');
const criticalCss = new ExtractTextWebpackPlugin('critical.css');

const config = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /critical\.css$/,
        use: criticalCss.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.css$/,
        exclude: /critical\.css$/,
        use: normalCss.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    criticalCss,
    normalCss,
    new StyleExtHtmlWebpackPlugin('critical.css'),
    new UglifyWebpackPlugin({
      sourceMap: true
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 5096,
      minRatio: 0.8
    })
  ]
};

module.exports = config;
