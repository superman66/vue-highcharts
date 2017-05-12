var path = require('path')
var webpack = require('webpack')
var base = require('./webpack.config.base')
var merge = require('webpack-merge')

var demo = merge(base, {
  entry: './demo/main.js',
  output: {
    path: path.resolve(__dirname, './demo'),
    publicPath: '/demo/',
    filename: 'bundle.js'
  },

});

module.exports = demo;


