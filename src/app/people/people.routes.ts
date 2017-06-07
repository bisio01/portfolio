import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeoplePageComponent } from './people-page/people-page.component';

export const PeopleRoutes: Routes = [
  {
    path: 'people',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'prefix'
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            component: <any>PeopleListComponent,
          },
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            component: <any>PeoplePageComponent,
          },
        ]
      },
    ]
  },

];
