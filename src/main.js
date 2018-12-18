import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Icon from 'vue-svg-icon/Icon.vue'

Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
