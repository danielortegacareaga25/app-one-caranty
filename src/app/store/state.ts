import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { hydrationMetaReducer } from './hydration/hydration.reducer';
import {
  UserState,
  nameStateModuleUser,
  userReducer,
} from './reducers/user.reducer';
import {
  TaskState,
  nameStateModuleTasks,
  taskReducer,
} from './reducers/task.reducer';

export interface RootState {
  [nameStateModuleUser]: UserState;
  [nameStateModuleTasks]: TaskState;
}

export const reducers: ActionReducerMap<RootState> = {
  [nameStateModuleUser]: userReducer,
  [nameStateModuleTasks]: taskReducer,
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];
