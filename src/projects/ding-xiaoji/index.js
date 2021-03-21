import Vue from 'vue';
import store from '@/store';
import '@/utils/rem';
import App from './App';
import '@/assets/css/index.css';
import router from '@/router';
import smoothscroll from 'smoothscroll-polyfill';
import {
  Popup,
  Tab,
  Tabs,
  DropdownMenu,
  DropdownItem,
  Dialog,
  Form,
  Picker,
  Field,
  Toast,
  Uploader,
  Button,
  RadioGroup,
  Skeleton,
  Radio
} from 'vant';
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Dialog);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Picker);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Button);
Vue.use(Uploader);
Vue.use(Skeleton);
smoothscroll.polyfill();
new Vue({
  store: store,
  router: router,
  // filters,
  render: function render (h) {
    return h(App);
  }
}).$mount('#app');
