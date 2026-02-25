import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Ripple } from 'primeng/ripple';
import { AuthService } from '../../service/auth-service';
import { Button } from 'primeng/button';
import { SwitchLangButtonComponent } from '../switch-lang-button/switch-lang-button.component';
import { SidebarItem } from '../../../api/types/sidebarItem.type';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, Ripple, Button, SwitchLangButtonComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true,
})
export class Sidebar implements OnInit {
  @Input() isOpen: boolean = false;
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }
  isMobileView: boolean = false;

  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 1175;
  }

  get sidebarItems(): SidebarItem[] {
    return [
      {
        label: 'navbar.pos',
        routerLink: 'pos',
        icon: 'fa-solid fa-clipboard',
        color: 'orange',
        mobileOnly: true,
      },
      {
        label: 'navbar.transaction',
        routerLink: 'transaction',
        icon: 'fa-solid fa-table-columns',
        color: 'orange',
        mobileOnly: true,
      },
      {
        label: 'navbar.booking',
        routerLink: 'booking',
        icon: 'fa-solid fa-clock',
        color: 'orange',
        mobileOnly: true,
      },
      {
        label: 'navbar.order_status',
        routerLink: 'order-status',
        icon: 'fa-solid fa-cube',
        color: 'orange',
        mobileOnly: true,
      },
      {
        label: 'navbar.check_dashboard',
        routerLink: 'check-dashboard',
        icon: 'fa-solid fa-chart-bar',
        color: 'orange',
        mobileOnly: true,
      },
      {
        label: 'sidebar.people',
        routerLink: 'pos',
        icon: 'fa-solid fa-user',
        color: 'primary',
      },
      {
        label: 'sidebar.wallet',
        routerLink: 'transaction',
        icon: 'fa-solid fa-wallet',
        color: 'primary',
      },
      {
        label: 'sidebar.food_items',
        routerLink: 'food-items',
        icon: 'fa-solid fa-utensils',
        color: 'primary',
      },
      {
        label: 'sidebar.reviews',
        routerLink: 'reviews',
        icon: 'fa-solid fa-star',
        color: 'primary',
      },
      {
        label: 'sidebar.authentication',
        routerLink: 'authentication',
        icon: 'fa-solid fa-circle-check',
        color: 'primary',
      },
      {
        label: 'sidebar.settings',
        routerLink: 'settings',
        icon: 'fa-solid fa-gear',
        color: 'primary',
      },
      {
        label: 'sidebar.support',
        routerLink: 'support',
        icon: 'fa-solid fa-envelope',
        color: 'primary',
      },
      {
        label: 'sidebar.terms_conditions',
        routerLink: 'terms-conditions',
        icon: 'fa-solid fa-headset',
        color: 'primary',
      },
    ];
  }

  logOut() {
    this._auth.logout();
    this._router.navigate(['/login']);
  }
}
