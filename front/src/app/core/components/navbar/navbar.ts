import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from 'primeng/button';
import { SwitchLangButtonComponent } from '../switch-lang-button/switch-lang-button.component';
import { TranslatePipe } from '@ngx-translate/core';
import { Ripple } from 'primeng/ripple';
import { AuthService } from '../../service/auth-service';
import { SidebarItem } from '../../../api/types/sidebarItem.type';

@Component({
  selector: 'app-navbar',
  imports: [
    Menubar,
    RouterLink,
    RouterLinkActive,
    Button,
    SwitchLangButtonComponent,
    TranslatePipe,
    Ripple,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true,
})
export class Navbar {
  @Input() sidebarOpen: boolean = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  userName: string = 'Ezzat Yaser';
  userRole: string = 'Super Admin';
  userAvatar: string = 'https://i.pravatar.cc/150?img=12'; // Placeholder avatar

  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) {}

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  items: SidebarItem[] = [
    { label: 'navbar.pos', routerLink: 'pos', icon: 'fa-solid fa-clipboard' },
    { label: 'navbar.transaction', routerLink: 'transaction', icon: 'fa-solid fa-table-columns' },
    { label: 'navbar.booking', routerLink: 'booking', icon: 'fa-solid fa-clock' },
    { label: 'navbar.order_status', routerLink: 'order-status', icon: 'fa-solid fa-cube' },
    {
      label: 'navbar.check_dashboard',
      routerLink: 'check-dashboard',
      icon: 'fa-solid fa-chart-bar',
    },
  ];
}
