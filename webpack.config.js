var path = require('path')
var webpack = require('webpack')
var base = require('./webpack.config.base')
var merge = require('webpack-merge')
const HtmlwebpackPlugin = require('html-webpack-plugin')

let plugins = []
plugins.push(
  new HtmlwebpackPlugin({
    title: 'Vue-Highcharts',
    filename: 'index.html',
    template: 'demo/index.html',
    inject: true,
    hash: true,
    path: path.resolve(__dirname, 'assets'),
  }),
)
var demo = merge(base, {
  entry: path.resolve(__dirname, 'demo/index'),
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, ''),
    publicPath: '/'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: './',
  },
  plugins,
})

module.exports = demo
