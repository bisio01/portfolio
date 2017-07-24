import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdTabsModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
import { LandingComponent } from './landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../auth/service/auth.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule,
    MaterializeModule.forRoot(),
    BrowserAnimationsModule,
    MdTabsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    AuthenticationService
  ]

})
export class PlacesModule {

}
