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
      { title: 'Projects', namespace: 'projects', fixed: false, outline: true },
      { title: 'Projects (synchronous)', namespace: 'projectsSync', fixed: false, outline: true },
      { title: 'Users', namespace: 'jsonplaceholder' },
      { title: 'Github', namespace: 'github' },
      { namespace: 'fakeinf', title: 'Infinite rows' },
      { namespace: 'fake75', title: '75 rows' },
      { namespace: 'fake999', title: '999 rows' },
      { namespace: 'fake1M', title: '1000000 rows' },
      (
        // Show "SmartDok" source only if Token exists
        localStorage.getItem('SmartApiToken') &&
        { namespace: 'smartdok', title: 'SmartDok Project Tree', fixed: true, outline: true }
      ),
      { namespace: 'empty', title: 'Empty' },
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
