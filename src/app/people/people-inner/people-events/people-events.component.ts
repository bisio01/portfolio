import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../events/service/events.service';

@Component({
  selector: 'app-people-events',
  templateUrl: './people-events.component.html',
  styleUrls: ['./people-events.component.css']
})
export class PeopleEventsComponent implements OnInit {

  public events: any[] = [];

  constructor(public eventsService: EventsService) {
    this.loadData()
  }
  loadData() {
    this.eventsService.getList('events').then((res: any[])=>{
      this.events = res
    });

  }



  ngOnInit() {
  }

}
