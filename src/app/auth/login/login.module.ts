import {BrowserModule} from "@angular/platform-browser/public_api";
import {HttpModule} from "@angular/http/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    
  ],
  declarations: [LoginComponent]

})
export class LoginModule { }
