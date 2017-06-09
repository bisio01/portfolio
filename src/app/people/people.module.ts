import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import {MdTabsModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    MdTabsModule
  ],
  declarations: [
    PeopleListComponent,
    PeoplePageComponent
  ]

})
export class PeopleModule { }
