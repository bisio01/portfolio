import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../service/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

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
