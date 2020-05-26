import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

import './thirdPartyStyles';

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueRouter)
Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
