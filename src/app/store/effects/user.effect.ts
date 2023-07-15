import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as UserActions from './../actions/user.actions';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private _userService: UserService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginUser),
      mergeMap(({ username, password }) =>
        this._userService.login(username, password).pipe(
          map((response) => UserActions.loginUserSuccess({ user: response })),
          catchError(() => of(UserActions.loginUserError()))
        )
      )
    )
  );
}
