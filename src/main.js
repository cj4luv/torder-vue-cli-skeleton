import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';

import router from '@router';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueCookies);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
