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
      path: '/app/intro/secret_file',
      name: 'secretFile',
      meta: {
        title: '什么是秘钥文件'
      },
      component: () =>
        import('./views/AppSecretFile.vue')
    },
    {
      path: '/app/legal/privacy',
      name: 'privacy',
      meta: {
        title: '隐私协议'
      },
      component: () =>
        import('./views/AppPrivacy.vue')
    },
    {
      path: '/app/legal/service',
      name: 'app_service',
      meta: {
        title: '服务条款'
      },
      component: () =>
        import('./views/AppService.vue')
    },
    {
      path: '/app/intro/exp',
      name: 'exp',
      meta: {
        title: '经验获取规则'
      },
      component: () =>
        import('./views/AppExp.vue')
    },
    {
      path: '/app/intro/invitation',
      name: 'invitation',
      meta: {
        title: '邀请好友奖励规则'
      },
      component: () =>
        import('./views/AppInvitation.vue')
    },
    {
      path: '/app/intro/ego',
      name: 'ego',
      meta: {
        title: 'EGO 奖励规则'
      },
      component: () =>
        import('./views/AppEgo.vue')
    },
    {
      path: '/app/intro/eda',
      name: 'eda',
      meta: {
        title: '毛豆获取规则'
      },
      component: () =>
        import('./views/AppEda.vue')
    },
    {
      path: '/app/intro/version',
      name: 'version',
      meta: {
        title: '版本说明'
      },
      component: () =>
        import('./views/AppVersion.vue')
    },
    {
      path: '/app/intro/faq',
      name: 'faq',
      meta: {
        title: '常见问题'
      },
      component: () =>
        import('./views/AppFAQ.vue')
    }
  ]
})
