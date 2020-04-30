import Vue from 'vue'
import App from './App.vue'

import router from './router'

import VueFullpage from 'vue-fullpage.js'
Vue.use(VueFullpage)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)
})