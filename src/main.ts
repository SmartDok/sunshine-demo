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

const ProjectId = '3773bbf9-2768-4712-9eba-d2bd5d73601c';
const ApiKey = process.env.VUE_APP_LOCIZE_API_KEY || undefined;
const Namespace = 'translations';

// Reference language is the original language used during development
const ReferenceLng = 'en';

// Fallback language is the language that is used in production, if the detected
// language is not supported
const FallbackLng = 'en';

locizer.init({
  fallbackLng: FallbackLng,
  referenceLng: ReferenceLng,
  projectId: ProjectId,
  apiKey: ApiKey,
});

locizer.load(Namespace, (err: Error | undefined, translations: any, detectedLng: string) => {
  // build message catalog format
  const messages = {
    [detectedLng]: translations,
  };

  locizeEditor.init({
    lng: detectedLng,
    defaultNS: Namespace,
    referenceLng: ReferenceLng,
    projectId: ProjectId,
  });

  // Create VueI18n instance with options
  const i18n = new VueI18n({
    locale: detectedLng, // set locale
    messages, // set locale messages
    missing: (locale, path, vue) => {
      // pipe to locize - that key will be created for you
      if (ApiKey) {
        locizer.add(Namespace, path);
      } else {
        console.warn(`Set VUE_APP_LOCIZE_API_KEY to add translation key: ${path}`);
      }
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
