import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdTabsModule} from '@angular/material';
import { PlacesCreateComponent } from './places-create/places-create.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesPageComponent } from './places-page/places-page.component';






@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    MdTabsModule

  ],
  declarations: [
    PlacesCreateComponent,
    PlacesListComponent,
    PlacesPageComponent
  ]

})
export class PlacesModule {

}
