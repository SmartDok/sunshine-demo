import { createDataModule, IFetchResult } from 'smartdok-sunshine';
import createBasicSort from './createBasicSort';

const source = createDataModule({
  getters: {
    columns() {
      return [
        { key: 'name', title: 'Name', sortable: true },
        { key: 'username', title: 'User name', sortable: true },
        { key: 'company', title: 'Company' },
        { key: 'email', title: 'Email', sortable: true },
        { key: 'suite', title: 'Suite' },
        { key: 'street', title: 'Street' },
        { key: 'zipcode', title: 'Zip-code' },
        { key: 'city', title: 'City' },
        { key: 'phone', title: 'Phone' },
        { key: 'website', title: 'Website' },
        { key: 'actions', title: 'Actions', export: false },
      ];
    },
  },

  actions: {
    fetch: createBasicSort(async (): Promise<IFetchResult> => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      const items = data.map((u: any) => ({
        key: u.id,
        data: {
          ...u,
          ...u.address,
          company: u.company.name,
        },
      }));

      return {items, total: 12};
    }),
  },
});

export default source;
