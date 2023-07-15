import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { hydrationMetaReducer } from './hydration/hydration.reducer';
import {
  UserState,
  nameStateModuleUser,
  userReducer,
} from './reducers/user.reducer';

export interface RootState {
  [nameStateModuleUser]: UserState;
}

export const reducers: ActionReducerMap<RootState> = {
  [nameStateModuleUser]: userReducer,
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];
