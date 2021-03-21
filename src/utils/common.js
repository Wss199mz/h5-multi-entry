const dateToStr = (dates, flag) => {
  if (!dates) return '';
  if (typeof dates === 'string') return dates;
  const now = new Date(dates);
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  if (month < 10) {
    month = '0' + month;
  }
  if (date < 10) {
    date = '0' + date;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  if (flag === 1) {
    return year + '-' + month + '-' + date;
  } else if (flag === 2) {
    return hour + ':' + min;
  } else if (flag === 3) {
    return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
  }
};

const _localStorage = window.localStorage;
const LocalStorage = {
  set (name, value) {
    const nameStr = String(name.trim());
    if (!_localStorage) return;
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    try {
      _localStorage.setItem(nameStr, value);
    } catch (_) {
      console.log('当前版本不支持，请更新系统版本');
    }
  },
  get (name) {
    const nameStr = String(name.trim());
    if (!_localStorage) return;
    const temp = _localStorage.getItem(nameStr);
    if (!temp) {
      return null;
    }
    try {
      return JSON.parse(temp);
    } catch (e) {
      return temp;
    }
  },
  clear (name) {
    const nameStr = String(name.trim());
    if (!_localStorage) return;
    if (nameStr) {
      try {
        _localStorage.removeItem(nameStr);
      } catch (_) {
        console.log('当前版本不支持，请更新系统版本');
      }
    } else {
      try {
        _localStorage.clear();
      } catch (_) {
        console.log('当前版本不支持，请更新系统版本');
      }
    }
  }
};

const Cookies = {
  setCookie (name, value, day) {
    const nameStr = String(name.trim());
    const exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    if (day > 0) {
      document.cookie = nameStr + '=' + escape(value) + ';expires=' + exp.toUTCString();
    } else {
      document.cookie = nameStr + '=' + escape(value);
    }
  },
  getCookie (name) {
    const nameStr = String(name.trim());
    let arr = '';
    const reg = new RegExp('(^| )' + nameStr + '=([^;]*)(;|$)');
    arr = document.cookie.match(reg);
    return document.cookie.match(reg) ? unescape(arr[2]) : null;
  },
  deleteCookie (name) {
    const nameStr = String(name.trim());
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this.getCookie(nameStr);
    if (cval !== null) {
      document.cookie = nameStr + '=' + cval + ';expires=' + exp.toUTCString();
    }
  }
};

const isIphone = navigator.userAgent.toUpperCase().indexOf('IPHONE') !== -1;


export { dateToStr, LocalStorage, Cookies, isIphone };
