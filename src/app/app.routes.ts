import {RouterModule} from '@angular/router';
import {AuthRoutes} from './auth/auth.routes';
import {DashboardRoutes} from './dashboard/dashboard.routes';
import {UserRoutes} from './user/user.routes';
import {LessonRoutes} from './lesson/lesson.routes';
import {ToDoListRoutes} from "./todo-list/todo-list.routes";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


export const ROUTES:RouterModule = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      ...AuthRoutes,
      ...DashboardRoutes,
      ...UserRoutes,
      ...LessonRoutes,
      ...ToDoListRoutes
    ]
  },

];
