import { Routes } from '@angular/router';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesPageComponent } from './places-page/places-page.component';

export const PlacesRoutes: Routes = [
  {
    path: 'places',
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
            component: <any>PlacesListComponent,
          },
        ]
      },
      {
        path: 'place',
        children: [
          {
            path: '',
            component: <any>PlacesPageComponent,
          },
        ]
      },
    ]
  },

];
