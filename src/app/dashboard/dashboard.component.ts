import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { UserService } from '../user/service/user.service';
import { PeopleService } from '../people/service/people.service';
import { SportListService } from '../service/sport-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit, AfterViewInit {

  notification: number;

  public user;

  public userLocal;
  public userLocalBg;

  public people: any[] = [];

  public peopleFriends: any[] = [];

  public skills: any[] = [];

  public closeFunctionCallback: true;
  public openFunctionCallback: false;

  constructor(public userService: UserService,
              public peopleService: PeopleService,
              public sportListService: SportListService) {
    this.user = this.userService.getData();

    this.userLocal = JSON.parse(localStorage.getItem('user'));
    this.userLocalBg = JSON.parse(localStorage.getItem('userBg'));
    this.loadData();
    sportListService.getList().then((res: any[]) => {
      this.skills = res;
    });
  }

  loadData(){
    this.peopleService.getList('friends').then((res: any[])=>{
      this.peopleFriends = res;
    });
  }

  notificationToggle(newValue: number) {
    if (this.notification === newValue) {
      this.notification = 0;
    }
    else {
      this.notification = newValue;
    }
  }


  public getSkillInfoById(id) {
    return this.skills.filter(el => el.id == id)[0];
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
