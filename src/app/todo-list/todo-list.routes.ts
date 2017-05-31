/**
 * Created by dante on 31.05.2017.
 */
import { Routes } from '@angular/router';
import {ToDoListComponent} from "./todo-list.component";

export const ToDoListRoutes: Routes = [
  {
    path: 'todo-list',
    component: <any>ToDoListComponent
  }
];
