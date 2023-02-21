import Vue from 'vue'
import App from './App.vue'
// 1、导入 路由模块
import router from '@/router/index.js'

// 导入样式
import './assets/css/bootstrap.css'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 2、挂载 router
  router:router
}).$mount('#app')

