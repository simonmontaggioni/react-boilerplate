const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = (env) => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: ['@babel/polyfill', APP_DIR],
      resolve: {
        extensions: ['.js', '.jsx', '.scss'],
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(s*)css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|gif|jpe?g)$/i,
            use: {
              loader: 'file-loader',
              options: {
                name: './assets/images/[hash].[ext]',
              },
            },
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(VERSION),
          'process.env.PLATFORM': JSON.stringify(PLATFORM),
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
          favicon: './public/favicon.ico',
        }),
        new MiniCssExtractPlugin({
          filename: './[name].css',
        }),
      ],
      output: {
        filename: './[name].bundle.js',
        chunkFilename: './[name].chunk.bundle.js',
        path: path.resolve(__dirname, '..', 'build/public/'),
      },
      devServer: {
        host: '0.0.0.0',
        publicPath: '/',
        contentBase: path.resolve(__dirname, '../public/'),
        watchContentBase: true,
        compress: true,
        port: 3000,
      },
    },
  ]);
};
