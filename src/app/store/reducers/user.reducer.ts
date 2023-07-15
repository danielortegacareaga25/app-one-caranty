import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/interfaces/user.interface';

import * as UserActions from './../actions/user.actions';

export interface UserState {
  user: User | null;
  isLoadingLogin: boolean;
  errorLogin: boolean;
}

export const initialState: UserState = {
  user: null,
  isLoadingLogin: false,
  errorLogin: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loginUser, (state) => ({
    ...state,
    errorLogin: false,
    isLoadingLogin: true,
  })),
  on(UserActions.loginUserSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoadingLogin: false,
  })),
  on(UserActions.loginUserError, (state) => ({
    ...state,
    isLoadingLogin: false,
    errorLogin: true,
  })),
  on(UserActions.logoutUser, (state) => ({
    ...state,
    user: null,
  }))
);

export const nameStateModuleUser = 'userStoreModule';
