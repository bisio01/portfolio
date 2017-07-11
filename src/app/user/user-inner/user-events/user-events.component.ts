import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../events/service/events.service';

@Component({
  selector: 'app-user-events',
  templateUrl: 'user-events.component.html',
  styleUrls: ['user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  public events: any[] = [];
  public myEvents: any[] = [];

  constructor(public eventsService: EventsService) {
    this.loadData()
  }
  loadData() {
    this.eventsService.getList('events').then((res: any[])=>{
      this.events = res
    });

    this.eventsService.getList('myEvents').then((res: any[])=>{
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
  }

}
