import { Profile } from '../entities';

export const fetchData = (): Promise<Profile[]> => {
  return Promise.resolve([]);
};

export const Api = {
  fetchData,
};
