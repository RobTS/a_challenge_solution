import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useCallback } from 'react';

// a hook to allow for handling Thunks similar to normal actions (useDispatch)
export const useThunk = (): (<T>(x: (dispatch: Dispatch) => T) => T) => {
  const dispatch = useDispatch();
  const wrapper = useCallback(
    <T>(thunk: (dispatch: Dispatch) => T) => {
      return thunk(dispatch);
    },
    [dispatch],
  );
  return wrapper;
};
