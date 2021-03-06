const express = require('express');
const app = express();
// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://test.test.com:8080');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
const data = {
  name: 'wade',
  age: 18
};
const api = '/api/user';

app.get(api, (req, res) => {
  res.send(data);
});
// 配置服务端口
app.listen(8000, () => {
  console.log(`http://localhost:8000${api}`);
});
