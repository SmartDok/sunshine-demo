import { IItem, IDataSource } from 'smartdok-sunshine/src/components/types';

const source: IDataSource = {
  title: 'Empty',
  count: null,
  columns: [
    { key: 'id', title: 'Id' },
    { key: 'name', title: 'Name' },
  ],
  fetch: async (): Promise<IItem[]> => [],
};

export default source;
