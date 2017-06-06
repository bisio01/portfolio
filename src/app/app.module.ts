import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './auth/service/auth.service';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ResetPassComponent } from './auth/reset-pass/reset-pass.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { LessonPageComponent } from './lesson/lesson-page/lesson-page.component';
import { AuthModule } from './auth/auth.module';
import {LessonListComponent} from "./lesson/lesson-list/lesson-list.component";
import {UserUpdateComponent} from "./user/user-update/user-update.component";
import { UserService } from './user/service/user.service';

//noinspection TypeScriptUnresolvedVariable
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    ResetPassComponent,
    UserPageComponent,
    UserUpdateComponent,
    LessonPageComponent,
    LessonListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(<any>ROUTES),
    ReactiveFormsModule,
  ],
  providers: [
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
