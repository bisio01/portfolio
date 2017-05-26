import { Routes } from '@angular/router';
import { LessonPageComponent } from './lesson-page/lesson-page.component';

export const LessonRoutes: Routes = [
  {
    path: 'lesson',
    component: <any>LessonPageComponent
  }
];
