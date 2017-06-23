import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { AuthenticationService } from './service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule.forRoot(),
    RouterModule,
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ResetPassComponent
  ],
  providers: [
    AuthenticationService
  ]

})
export class AuthModule { }
