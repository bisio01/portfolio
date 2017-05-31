import { Routes } from '@angular/router';
import { LessonPageComponent } from './lesson-page/lesson-page.component';
import {LessonListComponent} from "./lesson-list/lesson-list.component";

export const LessonRoutes: Routes = [
  {
    path: 'lessons',
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
            component: <any>LessonListComponent,
          },
        ]
      },
      {
        path: 'lesson',
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
