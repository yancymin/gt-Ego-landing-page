import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'EGO - 区块链身份平台，去中心化、可复用、隐私保护'
      },
      component: Home
    },
    {
      path: '/service',
      name: 'service',
      meta: {
        title: '服务条款'
      },
      component: () =>
        import('./views/Service.vue')
    },
    {
      path: '/private',
      name: 'private',
      meta: {
        title: '隐私声明'
      },
      component: () =>
        import('./views/Private.vue')
    },
    {
      path: '/FAQ',
      name: 'FQA',
      meta: {
        title: '常见问题'
      },
      component: () =>
        import('./views/FAQ.vue')
    }
  ]
})
