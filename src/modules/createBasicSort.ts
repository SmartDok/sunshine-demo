import { ISortState, IItem } from 'smartdok-sunshine';
import { ILoadResult, ILoadItemsPayload } from './types';

type BasicFetch = () => Promise<ILoadResult>;

export default (next: BasicFetch) => (
  async ({ getters }: any, { skip, take }: ILoadItemsPayload) => {
    if (skip > 0) return { items: [], total: 0 };

    let result: ILoadResult = await next();

    const sorting = getters.sorting as ISortState;
    if (sorting.key === null) return result;

    const { key, reverse } = sorting;

    const keyFunc = (item: IItem) => item.data[key];
    const sortFunc = (a: IItem, b: IItem) => {
      let keyA = keyFunc(a);
      let keyB = keyFunc(b);
      let v = reverse ? 1 : -1;

      switch (true) {
        case keyA < keyB:
          return v;
        case keyA > keyB:
          return -v;
        default:
          return 1;
      }
    };

    return {
      items: result.items.slice(skip).sort(sortFunc),
      total: result.total,
    };
  }
);
