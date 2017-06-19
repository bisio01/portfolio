/**
 * Created by vladimirzinyak on 06.06.17.
 */
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsCreateComponent } from './events-create/events-create.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventsInfoComponent } from './events-inner/events-info/events-info.component';
import { EventsPeopleComponent } from './events-inner/events-people/events-people.component';
import { EventsPlaceComponent } from './events-inner/events-place/events-place.component';
import { EventsPhotoComponent } from './events-inner/events-photo/events-photo.component';






@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    MdTabsModule,
    MaterializeModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  declarations: [
    EventsListComponent,
    EventsCreateComponent,
    EventsPageComponent,
    EventsInfoComponent,
    EventsPeopleComponent,
    EventsPlaceComponent,
    EventsPhotoComponent,
  ]

})
export class EventsModule { }
