import {BrowserModule} from "@angular/platform-browser/public_api";
import {HttpModule} from "@angular/http/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonPageComponent } from './lesson-page/lesson-page.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,

  ],
  declarations: [
    LessonPageComponent,
    LessonListComponent
  ]

})
export class LessonModule { }
