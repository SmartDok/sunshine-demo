import { IDataSource } from 'smartdok-sunshine/src/components/types';

import jsonplaceholder from './jsonplaceholder';
import projects from './projects';
// import smartdok from './smartdok';
import reqres from './reqres';
import github from './github';
import fake from './fake';
import empty from './empty';

const DataSources: IDataSource[] = [
  // smartdok,
  projects,
  jsonplaceholder,
  reqres,
  github,
  empty,

  fake('Infinite rows'),
  fake('75 rows', 75),
  fake('999 rows', 999),
  fake('1000000 rows', 1000000),
];

export default DataSources;
