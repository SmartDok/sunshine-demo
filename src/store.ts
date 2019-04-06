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
      { label: 'Infinite rows', key: 'fakeinf' },
      { label: '75 rows', key: 'fake75' },
      { label: '999 rows', key: 'fake999' },
      { label: '1000000 rows', key: 'fake1M' },
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

    fakeinf: fake(),
    fake75: fake(75),
    fake999: fake(999),
    fake1M: fake(100000),

    smartdok,

    empty,
  },

});

export default store;
