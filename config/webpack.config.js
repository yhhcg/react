const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('./path');

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
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.app,
    }),
    new HtmlWebpackPlugin({
      title: 'Summary-pro-react',
    }),
  ],
};
