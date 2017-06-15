import { Routes } from '@angular/router';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesPageComponent } from './places-page/places-page.component';
import { PlacesContactComponent } from './places-inner/places-contact/places-contact.component';
import { PlacesInfoComponent } from './places-inner/places-info/places-info.component';
import { PlacesPeopleComponent } from './places-inner/places-people/places-people.component';
import { PlacesPhotoComponent } from './places-inner/places-photo/places-photo.component';

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
        path: 'page',
        children: [
          {
            path: '',
            component: <any>PlacesPageComponent,
            children: [
              {
                path: 'events',
                component: <any>PlacesContactComponent,
              },
              {
                path: 'friends',
                component: <any>PlacesInfoComponent,
              },
              {
                path: 'photos',
                component: <any>PlacesPeopleComponent,
              },
              {
                path: 'places',
                component: <any>PlacesPhotoComponent,
              },
            ]
          },
        ]
      },
    ]
  },

];
