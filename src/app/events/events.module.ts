/**
 * Created by vladimirzinyak on 06.06.17.
 */
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsCreateComponent } from './events-create/events-create.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { MdTabsModule } from '@angular/material';





@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    MdTabsModule
  ],
  declarations: [
    EventsListComponent,
    EventsCreateComponent,
    EventsPageComponent
  ]

})
export class EventsModule { }
