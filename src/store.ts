import Vuex, { Module } from 'vuex';
import Vue from 'vue';
import { createDataModule } from 'smartdok-sunshine/src/vuex';

import projects from './modules/projects';
import jsonplaceholder from './modules/jsonplaceholder';
import github from './modules/github';
import fake from './modules/fake';
import empty from './modules/empty';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sources: [
      { title: 'Projects', namespace: 'projects', fixed: false, outline: true },
      { title: 'Users', namespace: 'jsonplaceholder' },
      { title: 'Github', namespace: 'github' },
      { namespace: 'fakeinf', title: 'Infinite rows' },
      { namespace: 'fake75', title: '75 rows' },
      { namespace: 'fake999', title: '999 rows' },
      { namespace: 'fake1M', title: '1000000 rows' },
      { namespace: 'empty', title: 'Empty' },
    ],
  },

  modules: {
    projects,
    jsonplaceholder,
    github,

    fakeinf: fake(),
    fake75: fake(75),
    fake999: fake(999),
    fake1M: fake(1000000),

    empty,
  },

});

export default store;
