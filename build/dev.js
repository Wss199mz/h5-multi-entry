const ip = require('ip').address();
module.exports = {
  contentBase: './dist',
  hot: true,
  overlay: true,
  quiet: true,
  host: '0.0.0.0' || ip,
  port: 8009, // 端口
  open: true // 自动打开页面
  // proxyTable: {
  //   '/api/*': {
  //     target: 'http://localhost:8000',
  //     changeOrigin: true
  //   }
  // }
};
