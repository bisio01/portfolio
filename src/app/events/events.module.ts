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
    EventsPageComponent
  ]

})
export class EventsModule { }
