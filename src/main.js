import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'
import i18n from './i18n'

import VueHtml2Canvas from 'vue-html2canvas';
 
Vue.use(VueHtml2Canvas);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
