import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';
import VueSocketIO from 'vue-socket.io';

import store from '@store';
import router from '@router';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueCookies);
Vue.use(new VueSocketIO({
  debug: false,
  connection: 'localhost:3003',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}));

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
