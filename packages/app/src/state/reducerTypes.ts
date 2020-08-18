import { Profile, RequestState } from './entities';

export type ProfileReducerState = RequestState<Profile[]>;

export type GlobalState = {
  profiles: ProfileReducerState;
};
