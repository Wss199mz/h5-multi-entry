// 域名
const URL = {
  // 生产环境
  PROD: ['', ''],
  // 预发环境
  PRE: [],
  // 集成测试环境
  SIT: [],
  // 测试环境
  TEST: ['']
};

// 后台接口的域名
const API = {
  // 生产环境
  PROD: {
    HostName: '',
    FileName: ''
  },
  // 预发环境
  PRE: {},
  // 集成测试环境
  SIT: {},
  // 测试环境
  TEST: {
    HostName: '',
    FileName: ''
  },
  // 开发环境
  DEV: {
    HostName: '',
    FileName: ''
  }
};

// 后台接口的域名。如模板 HostName 为网关接口。
let HostName = API.DEV.HostName || '';
let FileName = API.DEV.FileName || '';
let Env = 'DEV';
function checkUrl (url) {
  return window.location.href.indexOf(url) === 0;
}
// 根据域名为HostName重新赋值
Object.keys(URL).some(key => {
  const urls = URL[key];
  if (urls.length && urls.some(checkUrl)) {
    HostName = API[key].HostName || '';
    FileName = API[key].FileName || '';
    Env = key;
    return true;
  }
});

export { HostName, FileName, Env };
