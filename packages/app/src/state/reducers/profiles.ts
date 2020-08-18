import { SafeActionType } from '../entities';
import { ProfileReducerState } from '../reducerTypes';

export const profilesReducer = (
  state: ProfileReducerState,
  action: SafeActionType,
): ProfileReducerState => {
  switch (action.type) {
    default:
      return state;
  }
};
