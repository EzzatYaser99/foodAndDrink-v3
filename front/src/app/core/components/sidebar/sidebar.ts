import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Ripple } from 'primeng/ripple';
import { AuthService } from '../../service/auth-service';
import { Button } from 'primeng/button';
import { SwitchLangButtonComponent } from '../switch-lang-button/switch-lang-button.component';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, Ripple, Button, SwitchLangButtonComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true,
})
export class Sidebar {
  @Input() isOpen: boolean = false;

  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) {}

  sidebarItems: any[] = [
    { label: 'sidebar.dashboard', routerLink: 'dashboard', icon: 'fa-solid fa-grip' },
    { label: 'sidebar.people', routerLink: 'people', icon: 'fa-solid fa-user' },
    { label: 'sidebar.wallet', routerLink: 'wallet', icon: 'fa-solid fa-wallet' },
    { label: 'sidebar.food_items', routerLink: 'food-items', icon: 'fa-solid fa-utensils' },
    { label: 'sidebar.reviews', routerLink: 'reviews', icon: 'fa-solid fa-star' },
    {
      label: 'sidebar.authentication',
      routerLink: 'authentication',
      icon: 'fa-solid fa-circle-check',
    },
    { label: 'sidebar.settings', routerLink: 'settings', icon: 'fa-solid fa-gear' },
    { label: 'sidebar.support', routerLink: 'support', icon: 'fa-solid fa-envelope' },
    {
      label: 'sidebar.terms_conditions',
      routerLink: 'terms-conditions',
      icon: 'fa-solid fa-headset',
    },
  ];

  logOut() {
    this._auth.logout();
    this._router.navigate(['/login']);
  }
}
