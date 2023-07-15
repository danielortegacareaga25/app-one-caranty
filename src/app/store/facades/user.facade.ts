import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ROLE, User } from 'src/app/interfaces/user.interface';
import { selectRole, selectUser } from '../selectors/user.selector';

import * as UserActions from './../actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  user$: Observable<User | null>;
  userRole$: Observable<ROLE | undefined>;
  constructor(private store: Store) {
    this.user$ = this.store.select(selectUser);
    this.userRole$ = this.store.select(selectRole);
  }

  loginUser(username: string, password: string) {
    this.store.dispatch(UserActions.loginUser({ username, password }));
  }

  logout() {
    this.store.dispatch(UserActions.logoutUser());
  }
}
