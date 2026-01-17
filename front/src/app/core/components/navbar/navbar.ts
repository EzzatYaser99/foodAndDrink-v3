import { Component } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { SwitchLangButtonComponent } from '../switch-lang-button/switch-lang-button.component';
import { TranslatePipe } from '@ngx-translate/core';
import { Ripple } from 'primeng/ripple';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, RouterLink, Button, SwitchLangButtonComponent, TranslatePipe, Ripple],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true,
})
export class Navbar {
  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) {}

  items: any[] = [
    { label: 'navbar.pos', routerLink: 'pos', icon: 'fa-solid fa-table-cells ' },
    { label: 'navbar.transaction', routerLink: 'transaction', icon: 'fa-solid fa-table-columns' },
    { label: 'navbar.booking', routerLink: 'booking', icon: 'fa-solid fa-clock' },
    { label: 'navbar.order_status', routerLink: 'order-status', icon: 'fa-solid fa-cube' },
    {
      label: 'navbar.check_dashboard',
      routerLink: 'check-dashboard',
      icon: 'fa-solid fa-square-poll-vertical',
    },
  ];

  logOut() {
    this._auth.logout();
    this._router.navigate(['/login']);
  }
}
