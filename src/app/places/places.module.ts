import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdTabsModule} from '@angular/material';
import { PlacesCreateComponent } from './places-create/places-create.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesPageComponent } from './places-page/places-page.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';






@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule,
    MaterializeModule.forRoot(),
    BrowserAnimationsModule,
    MdTabsModule,

  ],
  declarations: [
    PlacesCreateComponent,
    PlacesListComponent,
    PlacesPageComponent
  ]

})
export class PlacesModule {

}
