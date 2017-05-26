import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';

export const UserRoutes: Routes = [
  {
    path: 'user',
    component: <any>UserPageComponent
  }
];
