import Vue from 'vue'
import router from './router'
import App from './App.vue'

import $ from 'jquery'
import i18n from './assets/script/i18n'

global.jQuery = global.$ = $;

import 'bootstrap'
import GlobalConst from './globalconst'

Vue.use(GlobalConst);

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
