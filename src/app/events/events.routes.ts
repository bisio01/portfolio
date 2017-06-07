import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list/events-list.component';
import { EventsCreateComponent } from './events-create/events-create/events-create.component';

export const EventsRoutes: Routes = [
  {
    path: 'events',
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
            component: <any>EventsListComponent,
          },
        ]
      },
      {
        path: 'create',
        children: [
          {
            path: '',
            component: <any>EventsCreateComponent,
          },
        ]
      },
    ]
  },

];
