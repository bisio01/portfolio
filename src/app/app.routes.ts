import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth/auth.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { UserRoutes } from './user/user.routes';
import { LessonRoutes } from './lesson/lesson.routes';


export const ROUTES: RouterModule = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  ...AuthRoutes,
  ...DashboardRoutes,
  ...UserRoutes,
  ...LessonRoutes
];
