import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './auth/service/auth.service';
import { UserService } from './user/service/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdDatepickerModule } from '@angular/material';
import { PlacesModule } from './places/places.module';
import { PeopleModule } from './people/people.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EventsModule } from './events/events.module';
import { NotificationComponent } from './notification/notification.component';
import { LandingComponent } from './landing/landing.component';
import { EventsService } from './events/service/events.service';
import { PeopleService } from './people/service/people.service';
import { PlacesService } from './places/service/places.service';
import { SportListService } from './service/sport-list.service';
import { AgmCoreModule } from '@agm/core';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotificationComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(<any>ROUTES),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    PlacesModule,
    PeopleModule,
    AuthModule,
    UserModule,
    EventsModule,

  ],
  providers: [
    AuthenticationService,
    UserService,
    EventsService,
    PeopleService,
    PlacesService,
    SportListService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
