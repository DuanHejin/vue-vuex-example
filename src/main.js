import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import store from './store';

import './thirdPartyStyles';

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
