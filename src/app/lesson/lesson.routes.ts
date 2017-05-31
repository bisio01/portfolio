import { Routes } from '@angular/router';
import { LessonPageComponent } from './lesson-page/lesson-page.component';
import {LessonListComponent} from "./lesson-list/lesson-list.component";

export const LessonRoutes: Routes = [
  {
    path: 'lesson',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'prefix'
      },
      {
        path: 'lesson-list',
        children: [
          {
            path: '',
            component: <any>LessonListComponent,
          },
        ]
      },
      {
        path: 'create',
        children: [
          {
            path: '',
            component: <any>LessonPageComponent,
          },
        ]
      },
    ]
  },

];
