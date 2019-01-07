import { IItem, IFetchResult } from 'smartdok-sunshine/src/components/types';
import createBasicSort from './createBasicSort';
import { createDataModule } from 'smartdok-sunshine/src/vuex';

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

  fetch: createBasicSort(async (): Promise<IFetchResult> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const items = data.map((u: any) => ({
      data: {
        ...u,
        ...u.address,
        company: u.company.name,
      },
    }));

    return {items, total: 12};
  }),
});

export default source;
