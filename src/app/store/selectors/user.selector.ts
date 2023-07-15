import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, nameStateModuleUser } from '../reducers/user.reducer';

export const selectUserState =
  createFeatureSelector<UserState>(nameStateModuleUser);

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectRole = createSelector(
  selectUserState,
  (state: UserState) => state.user?.role
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state: UserState) => state.isLoadingLogin
);

export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.errorLogin
);
