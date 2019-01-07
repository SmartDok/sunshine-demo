import { IItem, IDataSource, IFetchResult } from 'smartdok-sunshine/src/components/types';
import { createDataModule } from 'smartdok-sunshine/src/vuex';

const source = createDataModule({
  columns: [
    { key: 'id', title: 'Id' },
    { key: 'name', title: 'Name' },
  ],
  fetch: async (): Promise<IFetchResult> => ({
    items: [],
    total: 0,
  }),
});

export default source;
