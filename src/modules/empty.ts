import { createDataModule, IFetchResult } from 'smartdok-sunshine';

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
