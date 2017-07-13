import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';
import { SportListService } from '../../service/sport-list.service';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { UserService } from '../../user/service/user.service';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['events-list.component.css']
})


export class EventsListComponent implements OnInit {

  public data;

  public user;

  public events: any[] = [];
  public myEvents: any[] = [];

  public skills: any[] = [];
  public sillsInfo;


  constructor(public eventsService: EventsService,
              public sportListService: SportListService) {
    sportListService.getList().then((res: any[]) => {
      this.skills = res;
    });

    //this.user = this.userService.getData();

    this.user = JSON.parse(localStorage.getItem('user'));

    console.log(this.user, 'user')

    this.loadData();
  }

  loadData() {
    this.eventsService.getList('events').then((res: any[]) => {
      this.events = res;
      console.log(this.events, 'this.events')
    });

    this.eventsService.getList('myEvents').then((res: any[]) => {
      this.myEvents = res
    })
  }

  addEvent(id) {
    this.eventsService.addEvent(id).then(() => {
      this.loadData();
    })
  }

  exitEvent(id) {
    this.eventsService.exitEvent(id).then(() => {
      this.loadData();
    })
  }

  ngOnInit() {
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
  }

}


