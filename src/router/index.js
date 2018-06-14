import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: resolve => require(['@/components/login.vue'], resolve)
    },
    {
      path: '/mine',
      name: 'Mine',
      component: resolve => require(['@/components/Mine.vue'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login.vue'], resolve)
    },
    {
      path: '/carlist',
      name: 'show-car',
      component: resolve => require(['@/components/CarList.vue'], resolve)
    },
    {
      path: '/carDetail',
      component: resolve => require(['@/components/CarDetail.vue'], resolve)
    },
    {
      path: '*',
      component: resolve => require(['@/components/page/NotFound.vue'], resolve)
    }
  ]
})
