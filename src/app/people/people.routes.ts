import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { PeoplePhotosComponent } from './people-inner/people-photos/people-photos.component';
import { PeopleFriendsComponent } from './people-inner/people-friends/people-friends.component';
import { PeopleEventsComponent } from './people-inner/people-events/people-events.component';
import { PeoplePlacesComponent } from './people-inner/people-places/people-places.component';
import { PeopleChatComponent } from './people-inner/people-chat/people-chat.component';

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
        path: ':id',
        component: <any>PeoplePageComponent,
        children: [
          {
            path: 'chat',
            component: <any>PeopleChatComponent,
          },
          {
            path: 'events',
            component: <any>PeopleEventsComponent,
          },
          {
            path: 'friends',
            component: <any>PeopleFriendsComponent,
          },
          {
            path: 'photo',
            component: <any>PeoplePhotosComponent,
          },
          {
            path: 'places',
            component: <any>PeoplePlacesComponent,
          },
        ]
      },
    ]
  }
];
