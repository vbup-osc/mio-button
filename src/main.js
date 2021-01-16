import Vue from 'vue'
import App from './App.vue'
import i18n from './assets/script/i18n'
import './assets/script/analytics'

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
