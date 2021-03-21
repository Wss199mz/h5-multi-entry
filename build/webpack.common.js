const path = require('path');
const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = path.join(__dirname, '..', 'src');
const ip = require('ip').address();
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const devServer = require('./dev');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const resolve = dir => path.join(__dirname, '..', dir);
// var vConsolePlugin = require('vconsole-webpack-plugin');
// 接收运行参数
const argv = require('yargs')
  .describe('debug', 'debug 环境') // use 'webpack --debug'
  .argv;
module.exports = {
  entry: {
    app: ['./src/projects/' + process.env.NODE_PROJECT + '/index.js']
  },
  mode: 'development',
  devtool: 'inline-source-map',
  externals: {
    // 包名: window全局对象,
    vue: 'Vue',
    vant: 'vant',
    axios: 'axios',
    'vue-router': 'VueRouter'
  },
  plugins: [
    // new vConsolePlugin({ enable: !!argv.debug }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: isProd ? 'static/css/[name].[contenthash].css' : 'static/css/[name].css',
      chunkFilename: isProd ? 'static/css/[id].[contenthash].css' : 'static/css/[id].css'
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${ip}:${devServer.port}`, `Your application is running here: http://localhost:${devServer.port}`]
      },
      clearConsole: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ids.HashedModuleIdsPlugin({
      context: __dirname,
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    }),
    new HtmlWebpackPlugin({
      title: 'pc template',
      template: path.join(__dirname, '..', 'src/projects/' + process.env.NODE_PROJECT + '/index.html'), // 引入模版
      favicon: path.join(__dirname, '..', 'src/assets/icon/favicon.ico'),
      filename: 'index.html',
      inject: true,
      minify: {
        // 对index.html压缩
        collapseWhitespace: isProd, // 去掉index.html的空格
        removeAttributeQuotes: isProd // 去掉引号
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.join(srcPath, ''),
      crypto: false
    },
    extensions: ['.js', '.vue', '.scss'], // import引入文件的时候不用加后缀
    modules: [
      // 配置路径别名
      'node_modules',
      path.resolve(__dirname, '../src/*'),
      path.resolve(__dirname, '../src/assets')
    ]
  },
  output: {
    filename: process.env.NODE_ENV === 'development' ? `static/js/[name].[hash].js` : `static/js/[name].[chunkhash].js`,
    path: path.resolve(__dirname, '../dist/' + process.env.NODE_PROJECT),
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './'
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, resolve('static')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      // {
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: [/node_modules/, resolve('static')]
      // },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                  targets: {
                    browsers: ['> 1%', 'last 2 versions']
                  }
                }
              ]
            ]
          }
        }],
        // exclude: [/node_modules/, resolve('static')],
        include: ['/node_modules/vue-picture-preview/', resolve('src')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader'
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              publicPath: '../',
              limit: 50000,
              esModule: false,
              // 分离图片至imgs文件夹
              name: "static/images/[name].[contenthash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../',
              name: 'static/fonts/[name].[contenthash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
