import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const AuthRoutes: Routes = [
  {
    path: 'login',
    component: <any>LoginComponent
  },
  {
    path: 'registration',
    component: <any>RegistrationComponent
  }
];

