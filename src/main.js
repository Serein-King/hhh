import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 通用导入样式
import './style/base.less'
// 字体图标
import './style/iconfont.css'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入rem 适配
import 'amfe-flexible'
Vue.config.productionTip = false

Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
