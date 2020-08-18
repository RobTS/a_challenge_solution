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

// Promise.race as timeout implementation due to lack of a native one
const wrappedFetchWithTimeout = <T>(url: string) => {
  return Promise.race([
    wrappedFetch(url) as Promise<T>,
    new Promise<Profile[]>((_, reject) =>
      setTimeout(() => reject(new Error('Timeout while fetching')), 30000),
    ),
  ]);
};

export const fetchData = (): Promise<Profile[]> => {
  return wrappedFetchWithTimeout<Profile[]>('/');
};

export const Api = {
  fetchData,
};
