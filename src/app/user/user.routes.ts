import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import {UserUpdateComponent} from "./user-update/user-update.component";

export const UserRoutes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: '',
        redirectTo: 'page',
        pathMatch: 'prefix'
      },
      {
        path: 'page',
        children: [
          {
            path: '',
            component: <any>UserPageComponent,
          },
        ]
      },
      {
        path: 'update',
        children: [
          {
            path: '',
            component: <any>UserUpdateComponent,
          },
        ]
      },
    ]
  }
];
