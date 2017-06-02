import {BrowserModule} from "@angular/platform-browser/public_api";
import {HttpModule} from "@angular/http/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserService } from './service/user.service';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,

  ],
  declarations: [
    UserPageComponent,
    UserUpdateComponent
  ]

})
export class UserModule { }
