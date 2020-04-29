import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ba from 'vue-ba'

// Vue.use(ba, "4988b021d1c355f7469f76a9f26a5c62");
// Vue.use(ba, { siteId: "4988b021d1c355f7469f76a9f26a5c62" });

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

const isDev = process.env.NODE_ENV !== 'production'
/**
 * @Description: 百度统计
 * @author Wish
 * @date 2020/4/29
*/
let _hmt = [];
window._hmt = _hmt
if (!isDev) {
  const baiduTongJi = function () {
    let hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?' + '4988b021d1c355f7469f76a9f26a5c62'
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s)
  };
  baiduTongJi()
}

router.beforeEach((to, from, next) => {
  // 每个路由跳转时都将其跳转的路由推给百度
  if (!isDev && window._hmt) {
    // console.log(window._hmt)
    if (to.path) {
      // console.log(to.path)
      window._hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
  }

  next()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
