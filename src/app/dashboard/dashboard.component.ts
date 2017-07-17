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

  public people: any[] = [];

  public peopleFriends: any[] = [];
  public sillsInfo;


  constructor(public userService: UserService,
              public peopleService: PeopleService,
              public sportListService: SportListService) {
    this.user = this.userService.getData();

    this.userLocal = JSON.parse(localStorage.getItem('user'));
    this.loadData();
    console.log( this.userLocal, ' this.userLocal')
  }

  loadData(){
    this.peopleService.getList('friends').then((res: any[])=>{
      this.peopleFriends = res;
    });
   /* this.sportListService.getById(result).then((res: any[]) => {
      this.sillsInfo = res;
      console.log(this.sillsInfo, 'this.sillsInfo')
    });*/
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
