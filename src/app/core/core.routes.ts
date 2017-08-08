import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';

export const CoreRoutes: Routes = [
  {
    path: '404',
    component: <any>NoContentComponent
  }
];
