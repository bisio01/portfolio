import {BrowserModule} from "@angular/platform-browser/public_api";
import {HttpModule} from "@angular/http/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesCreateComponent } from './places-create/places-create.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesPageComponent } from './places-page/places-page.component';




@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,

  ],
  declarations: [
    PlacesCreateComponent,
    PlacesListComponent,
    PlacesPageComponent
  ]

})
export class EventsModule { }
