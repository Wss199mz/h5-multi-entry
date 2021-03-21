require('./check-versions')();
const checkArgv = require('./checkArgv');
if (!checkArgv()) {
  return;
}
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
const common = require('./webpack.common.js');
const devServer = require('./dev');
var compiler = webpack(common);
const app = new WebpackDevServer(compiler, {
  //注意此处publicPath必填
  publicPath: common.output.publicPath,
  overlay: {
    errors: true,
    warnings: true
  },
  contentBase: './dist',
  hot: true,
  quiet: true,
  host: devServer.host
});
app.listen(devServer.port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
  }
});
