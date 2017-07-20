import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEventsComponent } from './user-inner/user-events/user-events.component';
import { UserFriendsComponent } from './user-inner/user-friends/user-friends.component';
import { UserPhotosComponent } from './user-inner/user-photos/user-photos.component';
import { UserPlacesComponent } from './user-inner/user-places/user-places.component';
import { MdTabsModule, MdDialogModule } from '@angular/material';
import { UserChatComponent } from './user-inner/user-chat/user-chat.component';
import { ModalBgDialog } from '../modal/modal-user-bg/modal.component';




@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule.forRoot(),
    BrowserAnimationsModule,
    MdTabsModule,
    MdDialogModule,
  ],
  declarations: [
    UserPageComponent,
    UserUpdateComponent,
    UserEventsComponent,
    UserFriendsComponent,
    UserPhotosComponent,
    UserPlacesComponent,
    UserChatComponent,
    ModalBgDialog,
  ],
  entryComponents: [ModalBgDialog]
})
export class UserModule { }
