/**
 * Created by vladimirzinyak on 06.06.17.
 */
import {BrowserModule} from "@angular/platform-browser/public_api";
import {HttpModule} from "@angular/http/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list/events-list.component';
import { EventsCreateComponent } from './events-create/events-create/events-create.component';
import { EventsPageComponent } from './events-page/events-page/events-page.component';




@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,

  ],
  declarations: [
    EventsListComponent,
    EventsCreateComponent,
    EventsPageComponent
  ]

})
export class EventsModule { }
