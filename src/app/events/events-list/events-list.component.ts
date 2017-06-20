import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['events-list.component.css']
})


export class EventsListComponent implements OnInit {

  public events: any[] = [];

  constructor(public eventsService: EventsService) {
    eventsService.getList().then((res: any[])=>{
      this.events = res;
    });

  }


  ngOnInit() {
  }

}


