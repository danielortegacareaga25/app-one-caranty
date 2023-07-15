import { UserFacade } from 'src/app/store/facades/user.facade';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NotIsLoggedGuard implements CanActivate {
  constructor(private _userFacade: UserFacade, private router: Router) {}

  canActivate(): boolean {
    this._userFacade.user$.subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/tasks']);
        return false;
      }
    });
    return true;
  }
}
