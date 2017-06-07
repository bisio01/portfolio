import {BrowserModule} from "@angular/platform-browser/public_api";
import {HttpModule} from "@angular/http/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeoplePageComponent } from './people-page/people-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,

  ],
  declarations: [
    PeopleListComponent,
    PeoplePageComponent
  ]

})
export class EventsModule { }
