import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SmartDokUI from 'smartdok-sunshine';

Vue.config.productionTip = false;

Vue.use(SmartDokUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
