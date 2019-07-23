import {
  Module,
  GetterTree,
  ActionTree,
  MutationTree,
  ModuleTree,
} from 'vuex';
import { Mutex } from 'async-mutex';
import {
  ISortingState,
  IItem,
  IColumn,
  IColumns,
  IOrderedColumn,
  IColumnState,
  NO_SELECTION,
} from 'smartdok-sunshine';
import {
  IDataModuleState,
  IRequestLoadItemsPayload,
} from './types';

export const joinKeyPath = (keyPath: string[]) => keyPath.join(':');

export interface IShowSubItemsPayload {
  keyPath: string[];
}

const getItems = (keyPath: string[], state: IDataModuleState): IItem[] | null => {
  const key = joinKeyPath(keyPath);
  const items = state.items[key];
  if (items == null) return null;

  const nodes = items.map((item: IItem) => {
    let itemKeyPath = keyPath.concat(item.id);
    let subItems = item.subItems || (item.subItems === null ? getItems(itemKeyPath, state) : []);
    return {
      ...item,
      subItems,
    };
  });
  return nodes;
};

export interface WrappedModule<S, R> {
  namespaced?: boolean;
  state?: S | (() => S);
  getters?: GetterTree<S & IDataModuleState, R>;
  actions?: ActionTree<S & IDataModuleState, R>;
  mutations?: MutationTree<S & IDataModuleState>;
  modules?: ModuleTree<R>;
}


const createDataModule = <ModuleState = {}, RootState = any>(
  options: WrappedModule<ModuleState, RootState> & IColumns,
): Module<ModuleState & IDataModuleState, RootState> => {
  const mutex = new Mutex();

  const validateSavedColumns = (columns: IColumnState[]): IColumnState[] => {
    const missingColumns = options.columns
      .filter(c => !columns.find(o => o.key === c.key))
      .map(c => {
        console.warn(`Column ${c.key} was not included in saved state, and will be moved last and hidden.`);
        return { key: c.key, visible: false };
      });

    return columns
      .concat(missingColumns)
      .filter(o => {
        if (options.columns.find(c => c.key === o.key)) {
          return true;
        } else {
          console.warn(`Column ${o.key} in saved state does not exist.`);
          return false;
        }
      });
  };

  const getStorageKey = (namespace: string) => `s-table@${namespace}`;

  return {
    namespaced: true,

    state() {
      const moduleState = options.state instanceof Function ? options.state() : options.state;

      return {
        total: null,
        isLoading: false,
        items: { '': [] },
        sortingState: {
          key: null,
          reverse: false,
        } as ISortingState,
        filter: [],

        columnsState: [],

        selection: NO_SELECTION,

        ...(moduleState || {} as ModuleState),
      };
    },

    modules: {
      ...options.modules,
    },

    getters: {
      columns(state): IColumn[] {
        return options.columns;
      },

      items(state) {
        return getItems([], state);
      },

      selection: state => state.selection,

      columnsState: state => state.columnsState,

      selectedItems: state => {
        // TODO Include sub-items
        const { selected, inverted } = state.selection;
        return state.items[''].filter(item => selected.includes(item.id) !== inverted);
      },

      total(state) {
        return state.total;
      },

      sortingState(state) {
        return state.sortingState;
      },

      ...options.getters,
    },

    mutations: {
      sortingState: (state, sortingState: ISortingState) => {
        state.sortingState = sortingState;
      },

      filter(state, filter) {
        state.filter = filter;
      },

      selection: (state, selection) => {
        state.selection = selection;
      },

      columnsState: (state, columnsState) => {
        state.columnsState = columnsState;
      },

      loadStart: state => {
        state.isLoading = true;
      },

      loadEnd: state => {
        state.isLoading = false;
      },

      loadItemsComplete: (state, { items, total }) => {
        state.items = {
          ...state.items,
          '': items,
        };
        state.total = total;
      },

      loadSubItemsComplete: (state, { keyPath, items, total }) => {
        const key = joinKeyPath(keyPath);
        state.items = {
          ...state.items,
          [key]: items,
        };
      },

      savedState: (state, saved) => {
        Object.assign(state, saved);
      },

      ...options.mutations,
    },

    actions: {
      async sort({ commit, dispatch }, sortingState: ISortingState) {
        commit('sortingState', sortingState);
        await dispatch('init');
      },

      async filter({ dispatch, commit }, filter) {
        commit('filter', filter);
        await dispatch('init');
      },

      moveColumn({ getters, commit }, { from, to }: { from: number, to: number}) {
        const visibleColumns = getters.visibleColumns as ReadonlyArray<IColumn>;
        const orderedColumns = getters.orderedColumns as ReadonlyArray<IOrderedColumn>;

        const fromKey = visibleColumns[from].key;
        const fromIndex = orderedColumns.findIndex(oc => oc.column.key === fromKey);

        let toIndex: number;
        if (to === 0) {
          toIndex = 0;
        } else {
          const afterKey = visibleColumns[to - 1].key;
          toIndex = orderedColumns.findIndex(oc => oc.column.key === afterKey) + 1;
        }

        commit('moveColumn', { fromIndex, toIndex });
      },

      async init({ dispatch }) {
        await dispatch('requestLoadItems', { firstRow: 0, lastRow: 49, clear: true });
      },

      async requestLoadItems({ dispatch }, payload: IRequestLoadItemsPayload) {
        // Wait until any previous requests are completed
        await mutex.runExclusive(() => dispatch('_doRequestLoadItems', payload));
      },

      async _doRequestLoadItems({ state, commit, dispatch }, payload: IRequestLoadItemsPayload) {
        let items = payload.clear ? [] : state.items[''];

        let has = items.length;
        let needs = payload.lastRow;

        if (has >= needs) {
          console.info('Loading not needed', payload);
          return;
        }

        if (state.isLoading) {
          console.error('Store is already loading data', payload);
          return;
        }

        const chunkSize = 50;

        let needChunks = Math.ceil(needs / chunkSize) * chunkSize;

        commit('loadStart');

        try {
          let skip = has;
          let take = needChunks - skip;
          let result = await dispatch('loadItems', { skip, take });
          items = items.concat(result.items);

          // console.log(`got ${result.items.length} of ${result.total}`);

          commit('loadItemsComplete', { items, total: result.total });
        } catch (ex) {
          console.error('loadItems failed', ex);
        }

        commit('loadEnd');
      },

      async requestLoadSubItems({ dispatch }, payload: IShowSubItemsPayload) {
        // Wait until any previous requests are completed
        await mutex.runExclusive(() => dispatch('_doRequestLoadSubItems', payload));
      },

      async _doRequestLoadSubItems({ state, commit, dispatch }, { keyPath }: IShowSubItemsPayload) {
        // Already loaded?
        if (joinKeyPath(keyPath) in state.items) return;

        const result = await dispatch('loadSubItems', { keyPath });

        commit('loadSubItemsComplete', { keyPath, items: result.items, total: result.total });
      },

      async saveState({ state }, { namespace, label }) {
        // TODO: Server-side

        const storage = JSON.parse(localStorage.getItem(getStorageKey(namespace)) || '[]');

        storage.push({
          key: storage.length,
          label,
          state: {
            columnsState: state.columnsState,
            filter: state.filter,
          },
        });

        localStorage.setItem(getStorageKey(namespace), JSON.stringify(storage));
      },

      async deleteSavedState({ state }, { namespace, label }) {
        const data = localStorage.getItem(getStorageKey(namespace));
        if (!data) return;

        let storage = JSON.parse(data).filter((s: any) => s.label !== label);

        // Re-set keys
        storage.forEach((it: any, i: number) => {
          it.key = i;
        });

        localStorage.setItem(getStorageKey(namespace), JSON.stringify(storage));
      },

      async loadState({ commit }, { namespace, label }) {
        const data = localStorage.getItem(getStorageKey(namespace));
        if (!data) return;

        const saved = JSON.parse(data).find((s: any) => s.label === label);
        if (!saved) return;

        const state = {
          ...saved.state,
          columnsState: validateSavedColumns(saved.state.columnsState),
        };

        commit('savedState', state);
      },

      ...options.actions,
    },
  };
};

export default createDataModule;
