const merge = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackBar = require('webpackbar');
process.env.NODE_PROJECT = process.argv[2];
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var WebpackSkeletonDom = require('webpack-skeleton-dom');
const TerserPlugin = require('terser-webpack-plugin');
const skeletonHtml = require('./skeleton.js');
module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    moduleIds: 'named',
    minimizer: [
      // js mini
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          mangle: {
            safari10: true
          },
          compress: {
            drop_console: true,
            drop_debugger: false,
            pure_funcs: ['console.log'] // 移除console
          }
        }
      }),
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true, // 去除debugger
            drop_console: true // 去除console.log
          },
          mangle: {
            safari10: true
          }
        },
        cache: true, // 开启缓存
        parallel: true, // 平行压缩
        sourceMap: false // set to true if you want JS source maps
      }),
      // css mini
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new WebpackBar(),
    new WebpackSkeletonDom(
      {
        skeletonHtml: skeletonHtml()
      }
    ),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
