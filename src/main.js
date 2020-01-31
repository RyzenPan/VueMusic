import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./utils/reset.css"
import "./static/iconfont.css"
import 'vant/lib/index.css';
import { Swipe, SwipeItem, Icon } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
