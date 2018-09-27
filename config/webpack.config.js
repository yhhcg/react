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
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.appSrc,
        loaders: ['babel-loader'],
      },
      /**
       * Style-loader: Adds CSS to the DOM by injecting a <style> tag
       * Css-loader: Translates CSS into CommonJS
       * Postcss-loader: Use autoprefixer to parse CSS and add vendor
       *                 prefixes to CSS rules using values. 
       * Less-loader: Compiles Less to CSS
       */
      {
        test: /\.less$/,
        include: path.appSrc,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              // Dashes in class names will be camelized, the original
              // class name will be removed from the locals.
              camelCase: 'dashesOnly',
              localIdentName: '[folder]-[local]-[path]-[hash:base64:5]',
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.postcssConfig,
              },
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      /**
       * Transforms files into base64 URIs.
       */
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[hash].[ext]',
            },
          },
        ]
      },
    ],
  },
  devServer: {
    contentBase: path.appDist,
    hot: true,
    historyApiFallback: true, // Using the HTML5 History API
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      automaticNameDelimiter: '-',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.app,
    }),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      inject: false,
      template: require('html-webpack-template'),
      title: 'Summary-pro-react',
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR Plugin
  ],
  resolve: {
    alias: {
      Common: path.appCommon,
      Pages: path.appPages,
    },
  },
};
