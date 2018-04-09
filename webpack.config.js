const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    vendor: [ 'react', 'react-dom', 'axios', 'prop-types'],
    app: ['babel-polyfill', './lib/components/Index.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      { test: /\.ejs$/, loader: 'ejs-loader?variable=data' }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template using Handlebars',
      template: path.resolve(__dirname, 'views', 'index.ejs'),
      inject: false
    })
  ]
};

module.exports = config;