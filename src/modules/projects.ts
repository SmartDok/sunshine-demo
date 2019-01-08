import { ISortState, IItem, IDataSource, IFetchResult } from 'smartdok-sunshine/src/components/types';
import { createDataModule } from 'smartdok-sunshine/src/vuex';

const fmt = new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK' });
const kroner = (value: any) =>
  value == null ? null : fmt.format(value);

const delay = (milliseconds: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
};

const data: {[key: string]: IItem[]} = {

  // Projects
  '': [
    {
      key: '5124',
      totalChildren: -1,
      icon: 'fas fa-suitcase',
      data: {
        name: 'First project',
        number: '5124',
        place: 'Vibes gate 18C',
        department: 'Department A',
        responsible: 'Hans Hansen',
        ue_code: 'K6tUf2',
        calculated: 2000,
        hours: 1234,
        invoiced: 760,
        cost: 123412,
      },
    },

    {
      key: '5598',
      totalChildren: -1,
      icon: 'fas fa-suitcase',
      data: {
        name: 'Second project',
        number: '5598',
        place: 'Vibes gate 18C',
        department: 'Department A',
        responsible: 'Hans Hansen',
        ue_code: '9adsSD',
        calculated: 4300,
        hours: 2330,
        invoiced: 0,
        cost: 100 / 3,
      },
    },

    {
      key: '2934',
      totalChildren: 0,
      icon: 'fas fa-suitcase',
      data: {
        name: 'Third project',
        number: '2934',
        place: 'Vibes gate 18C',
        department: 'Department A',
        responsible: 'Hans Hansen',
        ue_code: '2aK90d',
        calculated: 1200,
        hours: 500,
        invoiced: 200,
        cost: 15500,
      },
    },
  ],

  // SubProjects
  '5124': [
    {
      key: '5124-1',
      totalChildren: -1,
      icon: 'far fa-folder',
      data: {
        name: 'Underprosjekt 1',
        number: '5124-1',
        place: 'Vibes gate 18C',
        department: 'Department A',
        responsible: 'Per Jensen',
        ue_code: 'di2Skd',
        calculated: 800,
        hours: 450,
        invoiced: 250,
        cost: 0,
      },
    },

    {
      key: '5124-2',
      totalChildren: -1,
      icon: 'far fa-folder',
      data: {
        name: 'Underprosjekt 2',
        number: '5124-2',
        place: 'Vibes gate 18C',
        department: 'Department A',
        responsible: 'Knut Knutsen',
        ue_code: 'toS3s9',
        calculated: 1200,
        hours: 700,
        invoiced: 400,
        cost: 1575.50,
      },
    },
  ],

  '5598': [
    {
      key: '5124-1',
      icon: 'far fa-folder',
      data: {
        name: 'Underprosjektnavn',
        number: '5124-1',
        place: 'Vibes gate 18C',
        department: 'Department A',
        responsible: 'Hans Hansen',
        ue_code: '8fRks2',
        calculated: 1000,
        hours: 0,
        invoiced: 0,
      },
    },
  ],

  // Areas
  '5124:5124-1': [
    {
      key: '5124-1100',
      icon: 'far fa-circle',
      data: {
        name: 'Område 1',
        number: '5124-1100',
        place: 'Kjeller',
        department: 'Department A',
        responsible: 'Pål Knutsen',
        ue_code: '',
        calculated: 0,
        hours: 0,
        invoiced: 0,
        cost: 4500,
      },
    },

    {
      key: '5124-1200',
      icon: 'far fa-circle',
      data: {
        name: 'Område 2',
        number: '5124-1200',
        place: 'Kjøkken',
        department: 'Department A',
        responsible: 'Erik Knutsen',
        ue_code: '',
        calculated: 0,
        hours: 0,
        invoiced: 0,
        cost: 15000,
      },
    },
  ],

  '5124:5124-2': [
    {
      key: '5124-1200',
      icon: 'far fa-circle',
      data: {
        name: 'Område 3',
        number: '5124-1200',
        place: 'Tak',
        department: 'Department A',
        responsible: 'Erik Knutsen',
        ue_code: '',
        calculated: 0,
        hours: 0,
        invoiced: 0,
        cost: 999.999999,
      },
    },
  ],
};

const source = createDataModule({
  columns: [
    { key: 'name', title: 'Name', width: 300 },
    { key: 'number', title: 'Number', width: 150 },
    { key: 'place', title: 'Place' },
    { key: 'department', title: 'Department' },
    { key: 'responsible', title: 'Responsible' },
    { key: 'ue_code', title: 'UE-code' },
    { key: 'calculated', title: 'Calculated', align: 'right' },
    { key: 'hours', title: 'Hours', align: 'right' },
    { key: 'invoiced', title: 'Invoiced', align: 'right' },
    { key: 'cost', title: 'Calculated cost', align: 'right', filter: kroner },
  ],

  fetch: async (skip: number, take: number, sorting: ISortState): Promise<IFetchResult> => {
    const items = data[''];
    if (skip > 0) return {items: [], total: items.length};
    return {items, total: items.length};
  },

  fetchChildren: async (keyPath: string[]): Promise<IFetchResult> => {
    await delay(500);

    const items = data[keyPath.join(':')];
    if (!items) return {items: [], total: 0};
    return {items, total: items.length};
  },

});

export default source;
