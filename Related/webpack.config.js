// const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/client/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.js',
  },
};
