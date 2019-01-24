import { createDataModule, IFetchResult, IColumn } from 'smartdok-sunshine';

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
    fetch: async (): Promise<IFetchResult> => ({
      items: [],
      total: 0,
    }),
  },
});

export default source;
