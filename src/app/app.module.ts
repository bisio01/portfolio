import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(<any>ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
