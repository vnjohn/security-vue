import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogLogin from '@/views/BlogLogin.vue'
import BlogIndex from '@/views/BlogIndex.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
     component: BlogLogin
    },
    {
      path: '/index',
      name: 'BlogIndex',
      component: BlogIndex
    },
    {
      path: '/login',
      name: 'login',
      component: BlogLogin
    }
  ]
})
