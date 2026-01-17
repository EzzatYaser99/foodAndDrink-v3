import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth-service';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [Button],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) {}
  login() {
    this._auth.login('FAKE_TOKEN');
    this._router.navigate(['/main/pos']);
  }
}
