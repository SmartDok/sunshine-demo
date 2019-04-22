import './demo.scss';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import SmartDokUI from 'smartdok-sunshine';
import App from './App.vue';
import router from './router';
import Example from './components/Example.vue';
import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';
import PropsList from './components/PropsList.vue';
import PropsItem from './components/PropsItem.vue';

import store from './store';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VeeValidate, {
  // inject: false,
  // errorBagName: '$errors',
  // fieldsBagName: '$fields',
});

// Casting to any here, because TypeScript apparently doesn't care about
// webpack's module resolution rules
Vue.use(SmartDokUI as any);

Vue.component('example', Example);
Vue.component('todo-list', TodoList);
Vue.component('todo', TodoItem);
Vue.component('props-list', PropsList);
Vue.component('props-item', PropsItem);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      save: 'Save',
      restore: 'Restore',

      datepicker: {
        option: {
          current: 'Current',
          next: 'Next',
          previous: 'Previous',
        },
        period: {
          day: 'Day',
          month: 'Month',
          week: 'Week',
        },
      },
    },

    nb: {
      save: 'Lagre',
      restore: 'Gjenopprett',
    },

    sv: {
      save: 'Spara',
      restore: 'Gjenopprett',
    },
  },
});

new Vue({
  router,
  store,
  i18n,

  render: (h) => h(App),
}).$mount('#app');
