import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserFacade } from 'src/app/store/facades/user.facade';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  error: string = '';

  constructor(private _userFacade: UserFacade) {}

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      this._userFacade.loginUser(
        this.form.get('username')?.value,
        this.form.get('password')?.value
      );
    }
  }
}
