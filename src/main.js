// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import './assets/css/reset.css'
import './assets/css/myreset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from "axios"
import router from "./router"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$post = Axios.post
Vue.prototype.$get = Axios.get



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
