import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { fadeInAnimation } from '../../animations/animations';

@Component({
  selector: 'app-user-page',
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class UserPageComponent implements OnInit {

  public user;

  public userLocal;


  constructor(public userService: UserService) {
    this.user = this.userService.getData();

    this.userLocal = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit() {

  }


  /*ngOnInit() {
    this.data = Observable.forkJoin(
      this.eventsService.getList('events'),
      this.eventsService.getList('myEvents'),
      this.sportListService.getList()
    );
    this.data.subscribe(
      data => {

        this.events = data[0];
        this.myEvents = data[1];
        this.skills = data[2];

        this.events.forEach(function (item: any,) {
          this.skills.forEach(function (skillItem: any) {
            if (skillItem.id === item.sportSkill) {
              item.sportSkill = skillItem;
            }
          });


        }.bind(this));
        console.log(this.events, 'qweqweqweqwe');
        this.myEvents.forEach(function (item: any,) {
        });

      }
    )
  }*/

}
