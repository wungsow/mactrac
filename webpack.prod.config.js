const path = require('path');
const config = require('./webpack.config.js');

const prodConfig = Object.assign(config, {
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js'
  }
});

module.exports = prodConfig;