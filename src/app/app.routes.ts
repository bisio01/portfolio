import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth/auth.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';


export const ROUTES: RouterModule = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  ...AuthRoutes,
  ...DashboardRoutes
];
