import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth-guard';

export const routes: Routes = [
  //  Redirect root to login first (order matters: this must be before the '' layout)
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  //  Public pages (auth layout with login/signup)
  {
    path: '',
    loadComponent: () => import('./pages/auth-layout/auth-layout').then((c) => c.AuthLayout),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth-layout/login/login').then((c) => c.Login),
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/auth-layout/signup/signup').then((c) => c.Signup),
      },
    ],
  },

  //  Main application
  {
    path: 'main',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/main-pages/main-pages').then((c) => c.MainPages),
    children: [
      {
        path: 'pos',
        loadComponent: () => import('./pages/main-pages/pos/pos').then((c) => c.Pos),
      },
      {
        path: 'transaction',
        loadComponent: () =>
          import('./pages/main-pages/transaction/transaction').then((c) => c.Transaction),
      },
      {
        path: 'booking',
        loadComponent: () => import('./pages/main-pages/booking/booking').then((c) => c.Booking),
      },
      {
        path: 'order-status',
        loadComponent: () =>
          import('./pages/main-pages/order-status/order-status').then((c) => c.OrderStatus),
      },
      {
        path: 'check-dashboard',
        loadComponent: () =>
          import('./pages/main-pages/checked-dashboard/checked-dashboard').then(
            (c) => c.CheckedDashboard,
          ),
      },
    ],
  },

  //  Catch-all
  { path: '**', redirectTo: 'login' },
];
