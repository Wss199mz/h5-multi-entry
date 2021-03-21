/**
 * api环境
 * ENV[x][0] 当前host地址 * 通配符
 * ENV[x][1] 当前api地址
 */
const ENV = [
  ['current', 'api'],
  ['https://zk.zt-express.com', 'https://doc-admin.zto.com'],
  ['*', 'http://10.9.41.113:8080']
  // ['*', 'http://10.1.55.47:8080']
];
const HOST_NAME = window.location.href;
let ENVArr = ENV.filter(val => {
  return ~HOST_NAME.indexOf(val[0]) || val[0] === '*';
});
if (ENVArr.length > 1) {
  ENVArr = ENVArr.filter(val => {
    return val[0] !== '*';
  });
}
const API_URL = ENVArr[0][1];
export const baseURL = API_URL;
export default {
  baseURL: API_URL
};
