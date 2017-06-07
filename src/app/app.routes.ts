import {RouterModule} from '@angular/router';
import {AuthRoutes} from './auth/auth.routes';
import {DashboardRoutes} from './dashboard/dashboard.routes';
import {UserRoutes} from './user/user.routes';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { EventsRoutes } from './events/events.routes';
import { PlacesRoutes } from './places/places.routes';


export const ROUTES:RouterModule = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  ...AuthRoutes,
  {
    path: '',
    component: DashboardComponent,
    children: [

      ...DashboardRoutes,
      ...UserRoutes,
      ...EventsRoutes,
      ...PlacesRoutes
    ]
  },

];
