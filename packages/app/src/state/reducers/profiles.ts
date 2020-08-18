import { SafeActionType } from '../entities';
import { ProfileReducerState } from '../reducerTypes';
import { SAFE_CONSTANTS } from '../constants';

export const profilesReducer = (
  state: ProfileReducerState,
  action: SafeActionType,
): ProfileReducerState => {
  switch (action.type) {
    case SAFE_CONSTANTS.FETCH_DATA_START:
      return { type: 'loading' };
    case SAFE_CONSTANTS.FETCH_DATA_SUCCESS:
      return { type: 'success', data: action.payload };
    case SAFE_CONSTANTS.FETCH_DATA_FAIL:
      return { type: 'error', error: action.error };
  }
  return state;
};
