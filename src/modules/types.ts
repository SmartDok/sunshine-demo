import {
  ISortState,
  IColumnState,
  IItem,
  ISelection,
} from 'smartdok-sunshine';

export interface IDataModuleState {
  isLoading: boolean;
  offset: number;
  sorting: ISortState;
  filter: any[], // TODO type
  items: { [key: string]: IItem[] };
  total: number | null;
  columnsState: IColumnState[];

  selection: ISelection;
}

export interface ILoadItemsPayload {
  skip: number;
  take: number;
}

export type FetchData = (
  skip: number,
  take: number,
  sorting: ISortState,
) => Promise<ILoadResult>;
export type FetchChildren = (keyPath: string[]) => Promise<ILoadResult>;

export interface ILoadSubItemsPayload extends ILoadItemsPayload {
  keyPath: string[];
}

export interface ILoadResult {
  items: IItem[];
  total: number | null;
}

export interface IRequestLoadItemsPayload {
  firstRow: number;
  lastRow: number;
  clear?: boolean;
}
