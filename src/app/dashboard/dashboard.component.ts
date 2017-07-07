import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { UserService } from '../user/service/user.service';
import { PeopleService } from '../people/service/people.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit, AfterViewInit {

  notification: number;

  public user;

  public userLocal;

  public people: any[] = [];

  public peopleFriends: any[] = [];

  constructor(public userService: UserService,
              public peopleService: PeopleService) {
    this.user = this.userService.getData();

    this.userLocal = JSON.parse(localStorage.getItem('user'));
    this.loadData();
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

  deleteFriend(id){
    this.peopleService.deleteFriend(id).then(()=>{
      this.loadData();
    });
  }



  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
