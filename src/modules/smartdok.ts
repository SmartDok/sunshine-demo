import { createDataModule, ISortState, IItem, IFetchResult } from 'smartdok-sunshine';

const BASEURL = 'https://web.trackthebox.com:5559/smartapi/';

const getJSON = async <T = any>(path: string): Promise<T> => {
  let url = new URL(path, BASEURL);
  let res = await fetch(`${url}`, {
    headers: {
      Token: localStorage.getItem('SmartApiToken') as string,
    },
  });
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error('Request failed');
  }
};

const fetchAreas = async (subProjectId: string): Promise<IItem[]> => {
  let areas = await getJSON(`Areas/GetAll?subProjectId=${subProjectId}`);

  return areas.map((data: any) => ({
    icon: 'far fa-circle',
    data: {
      name: data.Name,
      number: data.Number,
    },
  }));
};

const fetchSubProjects = async (projectId: string): Promise<IItem[]> => {
  let subProjects = await getJSON(`SubProjects/GetSubProjects?projectId=${projectId}`);

  return subProjects.map((data: any) => ({
    key: data.Id,
    totalChildren: -1,
    icon: 'far fa-folder',
    data: {
      name: data.Name,
      number: data.Number,
    },
  }));
};

const fetchProjects = async (): Promise<IItem[]> => {
  let projects = await getJSON('project/GetProjectList');

  return projects.map((data: any) => ({
    key: data.ProjectId,
    totalChildren: -1,
    icon: 'fas fa-suitcase',
    data: {
      name: data.ProjectName,
      number: data.ProjectNumber,
      location: data.LocationText,
      ue_code: data.ProjectHashId,
      hours_calculated: data.CalculatedHourConsumption || 0,
      hours_used: data.HourConsumption || 0,
      hours_invoiced: 0,
    },
  }));
};

const source = createDataModule({
  columns: [
    { key: 'name', title: 'Navn', width: 350 },
    { key: 'number', title: 'Number', width: 150 },
    { key: 'location', title: 'Oppdragssted', width: 250 },
    { key: 'department', title: 'Avdeling' },
    { key: 'ue_code', title: 'UE-kode' },
    { key: 'hours_calculated', title: 'Kalkulert', align: 'right', width: 100 },
    { key: 'hours_used', title: 'Timer', align: 'right', width: 100 },
    { key: 'hours_invoiced', title: 'Fakturert', align: 'right', width: 100 },
  ],

  fetch: async (skip: number, take: number, sorting: ISortState): Promise<IFetchResult> => {
    if (skip > 0) return {items: [], total: -1};
    const items = await fetchProjects();
    return {items, total: items.length};
  },

  fetchChildren: async (keyPath: string[]): Promise<IFetchResult> => {
    let items: IItem[] = [];

    if (keyPath.length === 1) {
      items = await fetchSubProjects(keyPath[0]);
    } else if (keyPath.length === 2) {
      items = await fetchAreas(keyPath[1]);
    }

    return {
      items,
      total: items.length,
    };
  },
});

export default source;
