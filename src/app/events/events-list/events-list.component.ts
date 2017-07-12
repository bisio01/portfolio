import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['events-list.component.css']
})


export class EventsListComponent implements OnInit {

  public events: any[] = [];
  public myEvents: any[] = [];

  constructor(public eventsService: EventsService) {
   this.loadData();
  }

  loadData() {
    this.eventsService.getList('events').then((res: any[])=>{
      this.events = res;
      console.log(this.events, 'this.events')
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


