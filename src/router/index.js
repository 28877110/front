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
      path: '/manage',
      component: resolve => require(['@/components/common/home.vue'], resolve),
      meta: { title: '主页' },
      children: [
        {
          path: '/addCar',
          component: resolve => require(['../components/common/addCar.vue'], resolve),
          meta: { title: '加车' }
        },
        {
          path: '/allcar',
          component: resolve => require(['../components/common/allcar.vue'], resolve),
          meta: { title: '车辆信息' }
        },
        {
          path: '/users',
          component: resolve => require(['../components/common/users.vue'], resolve),
          meta: { title: '用户管理' }
        },
        {
          path: '/usertocar',
          component: resolve => require(['../components/common/usertocar.vue'], resolve),
          meta: { title: '记录' }
        }

      ]
    },
    {
      path: '*',
      component: resolve => require(['@/components/page/NotFound.vue'], resolve)
    }
  ]
})
