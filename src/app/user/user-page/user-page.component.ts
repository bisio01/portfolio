import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { fadeInAnimation } from '../../animations/animations';
import { Observable } from 'rxjs';
import { SportListService } from '../../service/sport-list.service';
import { MdDialog } from '@angular/material';
import { ModalBgDialog } from '../../modal/modal-user-bg/modal.component';
import { UserBgList } from '../../service/user-bg.service';

@Component({
  selector: 'app-user-page',
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class UserPageComponent implements OnInit {

  public data;

  public user;

  public userLocal;
  public userBgLocal;
  public skills: any[] = [];
  public userBg;


  constructor(public userService: UserService,
              public sportListService: SportListService,
              public dialog: MdDialog,
              public userBgList: UserBgList) {

    this.user = this.userService.getData();
    this.userLocal = JSON.parse(localStorage.getItem('user'));
    this.userBg = JSON.parse(localStorage.getItem('userBg'));

    console.log(this.userLocal, 'this.userLocal');
  }

  public openDialog() {
    this.dialog.open(ModalBgDialog).afterClosed().subscribe(result => {

      this.userBgList.getById(result).then((res: any[]) => {

        localStorage.setItem('userBg', JSON.stringify(res));

        this.userBg = JSON.parse(localStorage.getItem('userBg'));
      });
    });
  }

  public getSkillInfoById(id) {
    return this.skills.filter(el => el.id == id)[0];
  }

  ngOnInit() {
    this.data = Observable.forkJoin(
      Observable.of(JSON.parse(localStorage.getItem('user'))),
      this.sportListService.getList()
    );
    this.data.subscribe(
      data => {

        this.user = data[0];
        this.skills = data[1];
        this.skills.forEach(function (skillItem: any) {
          if (skillItem.id === this.user.sportSkill) {
            this.user.sportSkill = skillItem;
          }
        }.bind(this));
      }
    )
  }

}
