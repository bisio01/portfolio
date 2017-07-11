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
import { PlacesInfoComponent } from './places-inner/places-info/places-info.component';
import { PlacesPeopleComponent } from './places-inner/places-people/places-people.component';
import { PlacesContactComponent } from './places-inner/places-contact/places-contact.component';
import { PlacesPhotoComponent } from './places-inner/places-photo/places-photo.component';
import { AgmCoreModule } from '@agm/core';






@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule,
    MaterializeModule.forRoot(),
    BrowserAnimationsModule,
    MdTabsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDT5TkDX1rcsi3HCVarGHccybdq05HZ048'
    })

  ],
  declarations: [
    PlacesCreateComponent,
    PlacesListComponent,
    PlacesPageComponent,
    PlacesInfoComponent,
    PlacesPeopleComponent,
    PlacesContactComponent,
    PlacesPhotoComponent
  ]

})
export class PlacesModule {

}
