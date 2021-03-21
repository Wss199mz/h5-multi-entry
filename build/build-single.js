require('./check-versions')();
const checkArgv = require('./checkArgv');
if (!checkArgv()) {
  return;
}
var ora = require('ora');
var rm = require('rimraf');
var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');

var webpackConfig = require('./webpack.prod');

var spinner = ora('正在构建....');
spinner.start();

rm(path.join(path.resolve(__dirname, '../dist')), err => {
  if (err) throw err;
  webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    console.log(chalk.cyan('构建完成~~\n'));
  });
});
