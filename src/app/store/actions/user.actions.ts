import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user.interface';

export const loginUser = createAction(
  '[User] Login user',
  props<{ username: string; password: string }>()
);

export const loginUserSuccess = createAction(
  '[User] Login user success',
  props<{ user: User }>()
);

export const loginUserError = createAction('[User] Login user error');

export const logoutUser = createAction('[User] Logout user');

export const logoutSuccess = createAction('[User] Logout user success');
