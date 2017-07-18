import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import {UserUpdateComponent} from "./user-update/user-update.component";
import { UserEventsComponent } from './user-inner/user-events/user-events.component';
import { UserFriendsComponent } from './user-inner/user-friends/user-friends.component';
import { UserPlacesComponent } from './user-inner/user-places/user-places.component';
import { UserPhotosComponent } from './user-inner/user-photos/user-photos.component';
import { UserChatComponent } from './user-inner/user-chat/user-chat.component';

export const UserRoutes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: '',
        redirectTo: 'page/friends',
        pathMatch: 'prefix'
      },
      {
        path: 'page',
        children: [
          {
            path: '',
            component: <any>UserPageComponent,
            children: [
              {
                path: 'events',
                component: <any>UserEventsComponent,
              },
              {
                path: 'friends',
                component: <any>UserFriendsComponent,
              },
              {
                path: 'photos',
                component: <any>UserPhotosComponent,
              },
              {
                path: 'places',
                component: <any>UserPlacesComponent,
              },
              {
                path: 'chat',
                component: <any>UserChatComponent,
              },
            ]
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
