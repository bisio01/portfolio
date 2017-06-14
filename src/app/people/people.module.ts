import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import {MdTabsModule} from '@angular/material';
import { PeopleFriendsComponent } from './people-inner/people-friends/people-friends.component';
import { PeopleEventsComponent } from './people-inner/people-events/people-events.component';
import { PeoplePlacesComponent } from './people-inner/people-places/people-places.component';
import { PeoplePhotosComponent } from './people-inner/people-photos/people-photos.component';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    PeopleListComponent,
    PeoplePageComponent,
    PeopleFriendsComponent,
    PeopleEventsComponent,
    PeoplePlacesComponent,
    PeoplePhotosComponent
  ]

})
export class PeopleModule { }
