import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../../people/service/people.service';

@Component({
  selector: 'app-user-friends',
  templateUrl: 'user-friends.component.html',
  styleUrls: ['user-friends.component.css']
})
export class UserFriendsComponent implements OnInit {

  public people: any[] = [];
  public peopleFriends: any[] = [];

  constructor(public peopleService: PeopleService) {
    this.loadData();
  }
  loadData(){
    this.peopleService.getList('notfriends').then((res: any[])=>{
      this.people = res;
    });

    this.peopleService.getList('friends').then((res: any[])=>{
      this.peopleFriends = res;
    });
  }

  addToFriend(id){
    this.peopleService.addToFriend(id).then(()=>{
      this.loadData();
    });
  }

  deleteFriend(id){
    this.peopleService.deleteFriend(id).then(()=>{
      this.loadData();
    });
  }

  ngOnInit() {
  }

}
