import { ActionType } from 'typesafe-actions';
import * as SafeActions from './actions';

export type RequestMissingData = {
  type: 'initial' | 'loading' | 'error';
  data?: undefined;
  error?: undefined;
};

export type RequestWithData<T> = {
  type: 'success';
  data: T;
  error?: undefined;
};

export type RequestWithError = {
  type: 'error';
  error: Error;
  data?: undefined;
};

export type RequestState<T> =
  | RequestMissingData
  | RequestWithData<T>
  | RequestWithError;

export type Profile = {
  id: string;
  avatar: string;
  name: string;
};

export type SafeActionType = ActionType<typeof SafeActions>;
