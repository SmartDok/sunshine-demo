import { IItem } from 'smartdok-sunshine';
import { ILoadItemsPayload } from './types';
import createDataModule from './createDataModule';

const fmt = new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK' });
const kroner = (value: any) => (value == null ? null : fmt.format(value));

const delay = (milliseconds: number): Promise<void> => new Promise(resolve => {
  setTimeout(resolve, milliseconds);
});

const items: IItem[] = [
  {
    key: '5124',
    icon: 'Briefcase-1',
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

    subItems: [
      {
        key: '5124-1',
        icon: 'Folder-1',
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
        icon: 'Folder-1',
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

        subItems: [
          {
            key: '5124-1200',
            icon: 'Focus-Center',
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
      },
    ],
  },

  {
    key: '5598',
    icon: 'Briefcase-1',
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

    subItems: [
      {
        key: '5124-1',
        icon: 'Folder-1',
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

        subItems: [
          {
            key: '5124-1100',
            icon: 'Focus-Center',
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
            icon: 'Focus-Center',
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
      },
    ],
  },

  {
    key: '2934',
    icon: 'Briefcase-1',
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

    subItems: [],
  },
];

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
    {
      key: 'cost', title: 'Calculated cost', align: 'right', filter: kroner,
    },
  ],

  actions: {
    loadItems: async ({}, { skip }: ILoadItemsPayload) => {
      if (skip > 0) return { items: [], total: items.length };
      return { items, total: items.length };
    },
  },

});

export default source;
