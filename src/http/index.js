import * as Axios from 'axios';
import Qs from 'qs';
let timer = '';
const axios = Axios.default.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  // 格式化params数据
  paramsSerializer (params) {
    return Qs.stringify(params);
  },
  timeout: 60000
});

// 拦截器
axios.interceptors.request.use(
  config => {
    timer && clearTimeout(timer);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    timer = setTimeout(() => {}, 500);
    if (response.data.statusCode === '301') {
      window.location.href = response.data.message;
      return false;
    }
    if (response) {
      const res = response.data;
      return res;
    }
    return Promise.reject(response);
  },
  error => {
    return Promise.reject(error);
  }
);

// get
export const _get = (req) => {
  return axios
    .get(req.url, { params: req.data, headers: req.headers })
    .catch(err => console.log(err));
};
// post
export const _post = (req) => {
  return axios({
    method: 'POST',
    url: `${req.url}`,
    params: req.params,
    data: req.data,
    headers: req.headers
  }).catch(err => console.log(err));
};
// patch
export const _put = (req) => {
  return axios({ method: 'PUT', url: `${req.url}`, data: req.data }).catch(
    err => console.log(err)
  );
};
// delete
export const _delete = (req) => {
  return axios({ method: 'DELETE', url: `${req.url}`, data: req.data }).catch(
    err => console.log(err)
  );
};
// formData
export const _form = (req) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json'
    }
  };
  return axios({
    method: 'POST',
    url: `${req.url}`,
    data: req.data,
    ...config
  }).catch(err => console.log(err));
};
