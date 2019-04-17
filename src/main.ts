import './demo.scss';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import SmartDokUI from 'smartdok-sunshine';
import locizer from 'locizer';
import locizeEditor from 'locize-editor';
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

locizer.init({
  fallbackLng: 'en', // load this if detected lng is not support
  referenceLng: 'en', // the source language
  projectId: '3773bbf9-2768-4712-9eba-d2bd5d73601c', // your locize project id
  apiKey: 'f9a57b12-5a45-4daa-8beb-c3433ba4a5a3', // your locize api key
});

locizer.load('translations', (err, translations, detectedLng) => {
  // build message catalog format
  const messages = {
    [detectedLng]: translations,
  };

  locizeEditor.init({
    lng: detectedLng,
    defaultNS: 'translations',
    referenceLng: 'en',
    projectId: '3773bbf9-2768-4712-9eba-d2bd5d73601c',
  });

  // Create VueI18n instance with options
  const i18n = new VueI18n({
    locale: detectedLng, // set locale
    messages, // set locale messages
    missing: (locale, path, vue) => {
      // pipe to locize - that key will be created for you
      locizer.add('translations', path, path);
    },
  });

  // Create a Vue instance with `i18n` option
  new Vue({
    router,
    store,
    i18n,

    render: (h) => h(App),
  }).$mount('#app');
});

// const i18n = new VueI18n({
//   locale: 'en',
//   messages: {
//     en: {
//       save: 'Save',
//       restore: 'Restore',
//     },

//     nb: {
//       save: 'Lagre',
//       restore: 'Gjenopprett',
//     },

//     sv: {
//       save: 'Spara',
//       restore: 'Gjenopprett',
//     },
//   },
// });
