import { createDataModule, ILoadResult, IColumn } from 'smartdok-sunshine';

const source = createDataModule({
  getters: {
    columns(): IColumn[] {
      return [
        { key: 'id', title: 'Id' },
        { key: 'name', title: 'Name' },
      ];
    },
  },

  actions: {
    loadItems: async (): Promise<ILoadResult> => ({
      items: [],
      total: 0,
    }),
  },
});

export default source;
