import { Component } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { SwitchLangButtonComponent } from '../switch-lang-button/switch-lang-button.component';
import { TranslatePipe } from '@ngx-translate/core';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, RouterLink, Button, SwitchLangButtonComponent, TranslatePipe, Ripple],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true,
})
export class Navbar {
  items: any[] = [
    { label: 'navbar.pos', routerLink: '', icon: 'fa-solid fa-table-cells ' },
    { label: 'navbar.transaction', routerLink: '', icon: 'fa-solid fa-table-columns' },
    { label: 'navbar.booking', routerLink: '', icon: 'fa-solid fa-clock' },
    { label: 'navbar.order_status', routerLink: '', icon: 'fa-solid fa-cube' },
    { label: 'navbar.check_dashboard', routerLink: '', icon: 'fa-solid fa-square-poll-vertical' },
  ];

  logOut() {}
}
