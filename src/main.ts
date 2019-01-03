import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SmartDokUI from 'smartdok-sunshine';

Vue.config.productionTip = false;

// Casting to any here, because TypeScript apparently doesn't care about
// webpack's module resolution rules
Vue.use(SmartDokUI as any);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
