import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as UserActions from './../actions/user.actions';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private _userService: UserService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginUser),
      mergeMap(({ username, password }) =>
        this._userService.login(username, password).pipe(
          map(
            (response) => {
              this.router.navigate(['/tasks']);
              return UserActions.loginUserSuccess({ user: response });
            },
            catchError(() => of(UserActions.loginUserError()))
          )
        )
      )
    )
  );

  logout = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.logoutUser),
      mergeMap(() =>
        this._userService.logout().pipe(
          map(
            () => {
              this.router.navigate(['/']);
              return UserActions.logoutSuccess();
            },
            catchError(() => of(UserActions.loginUserError()))
          )
        )
      )
    )
  );
}
