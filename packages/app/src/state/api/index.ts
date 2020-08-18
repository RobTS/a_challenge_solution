import { Profile } from '../entities';
import { SERVER_URL } from '../../config';

const wrappedFetch = (url: string) => {
  return fetch(SERVER_URL + url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json());
};

export const fetchData = (): Promise<Profile[]> => {
  return Promise.race([
    wrappedFetch('/') as Promise<Profile[]>,
    new Promise<Profile[]>((_, reject) =>
      setTimeout(() => reject(new Error('Timeout while fetching')), 30000),
    ),
  ]);
};

export const Api = {
  fetchData,
};
