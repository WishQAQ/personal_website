import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAnalytics from 'vue-analytics';


import { Container, Header, Main, Footer, Message, Tooltip, Popover } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Tooltip);
Vue.use(Popover);
Vue.prototype.$message = Message

Vue.config.productionTip = false

// 公用样式
import('../public/base.less')

import axios from "axios";
Vue.prototype.$axios = axios;

const isProd = process.env.NODE_ENV === 'production'

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-164929205-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  },
  autoTracking: {
    pageviewOnLoad: false
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
