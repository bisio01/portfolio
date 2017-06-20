import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsCreateComponent } from './events-create/events-create.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventsContactComponent } from './events-inner/events-contact/events-contact.component';
import { EventsInfoComponent } from './events-inner/events-info/events-info.component';
import { EventsPeopleComponent } from './events-inner/events-people/events-people.component';
import { EventsPhotoComponent } from './events-inner/events-photo/events-photo.component';

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
      {
        path: 'page/:id',
        component: EventsPageComponent,
        children: [
          {
            path: 'contact',
            component: <any>EventsContactComponent,
          },
          {
            path: 'info',
            component: <any>EventsInfoComponent,
          },
          {
            path: 'people',
            component: <any>EventsPeopleComponent,
          },
          {
            path: 'photo',
            component: <any>EventsPhotoComponent,
          },
        ]
      },
    ]
  },

];
