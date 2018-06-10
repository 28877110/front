import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mine from '@/components/Mine.vue'
import showCarList from '@/components/CarList.vue'
import login from '@/components/login.vue'
import notfound from '@/components/NotFound.vue'
import CarDetail from '@/components/CarDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/carlist',
      name: 'show-car',
      component: showCarList
    },
    {
      path: '/carDetail',
      component: CarDetail
    },
    {
      path: '*',
      component: notfound
    }
  ]
})
