import { combineReducers } from 'redux';
import { profilesReducer } from './profiles';

export const rootReducer = combineReducers({
  profiles: profilesReducer,
});
