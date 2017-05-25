import { RouterModule } from '@angular/router';
import { LoginRoutes } from './auth/login/login.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';


export const ROUTES: RouterModule = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  ...LoginRoutes,
  ...DashboardRoutes
];
