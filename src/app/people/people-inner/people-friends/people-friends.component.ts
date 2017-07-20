import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../service/people.service';

@Component({
  selector: 'app-people-friends',
  templateUrl: './people-friends.component.html',
  styleUrls: ['./people-friends.component.css']
})
export class PeopleFriendsComponent implements OnInit {

  public people: any[] = [];

  constructor(public peopleService: PeopleService) {
    this.loadData();
  }
  loadData() {
    this.peopleService.getList('notfriends').then((res: any[]) => {
      this.people = res;
    });
  }




  ngOnInit() {
  }

}
