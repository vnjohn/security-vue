// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Cookies from 'js-cookie'
import router from './router'
import {getToken} from '@/router/auth.js'
//引用axios,并设置基础URL为后端服务api地址
var axios=require('axios')
axios.defaults.baseURL='http://127.0.0.1:8764'
//将API方法 绑定到全局
Vue.prototype.$axios=axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
