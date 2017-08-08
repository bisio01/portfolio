import {RouterModule} from '@angular/router';
import {AuthRoutes} from './auth/auth.routes';
import {DashboardRoutes} from './dashboard/dashboard.routes';
import {UserRoutes} from './user/user.routes';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { EventsRoutes } from './events/events.routes';
import { PlacesRoutes } from './places/places.routes';
import { PeopleRoutes } from './people/people.routes';
import { NotificationRoutes } from './notification/notification.routes';
import { LandingComponent } from './landing/landing.component';
import { CoreRoutes } from './core/core.routes';


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
      ...PlacesRoutes,
      ...PeopleRoutes,
      ...NotificationRoutes,
      ...CoreRoutes
    ]
  },
  {
    path: 'landing',
    component: LandingComponent,
  }

];
