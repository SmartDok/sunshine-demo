import { ISortingState, IItem } from 'smartdok-sunshine';
import { ILoadResult, ILoadItemsPayload } from './types';

type BasicFetch = () => Promise<ILoadResult>;

export default (next: BasicFetch) => (
  async ({ getters }: any, { skip, take }: ILoadItemsPayload) => {
    if (skip > 0) return { items: [], total: 0 };

    let result: ILoadResult = await next();

    const sortingState = getters.sortingState as ISortingState;
    if (sortingState.key === null) return result;

    const { key, reverse } = sortingState;

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
