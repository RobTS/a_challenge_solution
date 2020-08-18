import { Dispatch } from 'redux';
import * as SafeActions from '../actions';
import { Api } from '../api';

export const fetchData = () => (dispatch: Dispatch): Promise<void> => {
  dispatch(SafeActions.fetchDataStart());

  return Api.fetchData()
    .then((data) => {
      dispatch(SafeActions.fetchDataSuccess(data));
    })
    .catch((error: Error) => {
      dispatch(SafeActions.fetchDataFail(error));
      throw error;
    });
};
