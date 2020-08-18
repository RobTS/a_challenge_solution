import { SAFE_CONSTANTS } from '../constants';
import { action } from 'typesafe-actions';
import { Profile } from '../entities';

export const fetchDataStart = () => action(SAFE_CONSTANTS.FETCH_DATA_START);

export const fetchDataSuccess = (profiles: Profile[]) =>
  action(SAFE_CONSTANTS.FETCH_DATA_SUCCESS, profiles);

export const fetchDataFail = (error: Error) =>
  action(SAFE_CONSTANTS.FETCH_DATA_FAIL, undefined, undefined, error);
