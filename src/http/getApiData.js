import apiUrl from './apiUrl';
import { HostName } from '@/config/dev';
import { _form } from './index';
const transVoiceToWord = data => {
  const opts = {
    url: `${HostName}${apiUrl.transVoiceToWord.url}`,
    data
  };
  return _form(opts);
};


export {
  transVoiceToWord
};
