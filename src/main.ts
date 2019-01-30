import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SmartDokUI from 'smartdok-sunshine';
import Example from './components/Example.vue';

Vue.config.productionTip = false;

import store from './store';

// Casting to any here, because TypeScript apparently doesn't care about
// webpack's module resolution rules
Vue.use(SmartDokUI as any);

Vue.component('example', Example);

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount('#app');
