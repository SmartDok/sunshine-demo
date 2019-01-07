import { ISortState, IItem, FetchData, IFetchResult } from 'smartdok-sunshine/src/components/types';
type BasicFetch = () => Promise<IFetchResult>;

export default (next: BasicFetch): FetchData => (
  async (skip: number, take: number, sorting: ISortState) => {
    if (skip > 0) return {items: [], total: 0};

    let result: IFetchResult = await next();

    if (sorting.key === null)
      return result;

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
