import { createDataModule, ILoadResult } from 'smartdok-sunshine';
import createBasicSort from './createBasicSort';

const source = createDataModule({
  columns: [
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
  ],

  actions: {
    loadItems: createBasicSort(async (): Promise<ILoadResult> => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=1000');
      const data = await res.json();

      const items = data.map((u: any) => ({
        key: u.id,
        data: {
          ...u,
          ...u.address,
          company: u.company.name,
        },
      }));

      const totalHeader = res.headers.get('x-total-count') as string;
      const total = totalHeader ? parseInt(totalHeader, 10) : items.length;
      return {items, total};
    }),
  },
});

export default source;
