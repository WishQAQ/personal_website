import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
