import Vue from 'vue'
import router from './router'
import App from './App.vue'
import i18n from './assets/script/i18n'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
