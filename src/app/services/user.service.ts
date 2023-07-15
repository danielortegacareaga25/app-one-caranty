import { Injectable } from '@angular/core';
import { Observable, map, throwError, timer } from 'rxjs';
import { UsersMock } from '../const/users.const';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  login(username: string, password: string): Observable<User> {
    const userFounded = UsersMock.find(
      (user) => user.username === username && user.password === password
    );

    if (!userFounded) return throwError(() => new Error('Not Founded User'));

    return timer(3000).pipe(
      map(() => {
        return userFounded ?? {};
      })
    );
  }
}
