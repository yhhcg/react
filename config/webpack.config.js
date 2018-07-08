const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('./path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.appSrc,
  output: {
    filename: 'js/[name].[hash].js',
    path: path.appDist,
  },
  devServer: {
    contentBase: path.appDist,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.app,
    }),
    new HtmlWebpackPlugin({
      title: 'Summary-pro-react',
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR Plugin
  ],
};
