import Vuex from 'vuex';
import Vue from 'vue';

import projects from './modules/projects';
import projectsSync from './modules/projects-sync';
import jsonplaceholder from './modules/jsonplaceholder';
import github from './modules/github';
import fake from './modules/fake';
import empty from './modules/empty';
import smartdok from './modules/smartdok';

Vue.use(Vuex);

const compact = <T>(array: T[]): T[] => array.filter(e => e);

const store = new Vuex.Store({
  state: {
    sources: compact([
      {
        label: 'Projects', key: 'projects', fixed: false, outline: true,
      },
      {
        label: 'Projects (synchronous)', key: 'projectsSync', fixed: false, outline: true,
      },
      { label: 'Users', key: 'jsonplaceholder' },
      { label: 'Github', key: 'github' },
      { label: 'Many rows', key: 'fake' },
      { label: 'Infinite rows', key: 'fakeinf' },
      (
        // Show "SmartDok" source only if Token exists
        localStorage.getItem('SmartApiToken') &&
        {
          label: 'SmartDok Project Tree', key: 'smartdok', fixed: true, outline: true,
        }
      ),
      { label: 'Empty', key: 'empty' },
    ]),
  },

  modules: {
    projects,
    projectsSync,
    jsonplaceholder,
    github,

    fake: fake(2500),
    fakeinf: fake(),

    smartdok,

    empty,
  },

});

export default store;
