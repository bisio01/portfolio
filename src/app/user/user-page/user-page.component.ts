import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { fadeInAnimation } from '../../animations/animations';
import { Observable } from 'rxjs';
import { SportListService } from '../../service/sport-list.service';
import { MdDialog } from '@angular/material';
import { ModalBgDialog } from '../../modal/modal-user-bg/modal.component';

@Component({
  selector: 'app-user-page',
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class UserPageComponent implements OnInit {

  public data;

  public user;

  public userLocal;
  public skills: any[] = [];
  public sillsInfo;


  constructor(public userService: UserService,
              public sportListService: SportListService,
              public dialog: MdDialog) {
    this.user = this.userService.getData();

    this.userLocal = JSON.parse(localStorage.getItem('user'));

    console.log(JSON.parse(localStorage.getItem('user')), 'user')

  }


  public openDialog() {
    this.dialog.open(ModalBgDialog).afterClosed().subscribe(result => {
      this.sportListService.getById(result).then((res: any[]) => {
        this.sillsInfo = res;
      });
    });
  }

  ngOnInit() {
    this.data = Observable.forkJoin(
      Observable.of(JSON.parse(localStorage.getItem('user'))),
      this.sportListService.getList()
    );
    console.log(JSON.parse(localStorage.getItem('user')), 'qweqwe');
    this.data.subscribe(
      data => {

        this.user = data[0];
        this.skills = data[1];


          this.skills.forEach(function (skillItem: any) {
            if (skillItem.id === this.user.sportSkill) {
              this.user.sportSkill = skillItem;
            }
          }.bind(this));

        console.log(this.user, 'this.user');

      }
    )
  }

}
