import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['events-list.component.css']
})





export class EventsListComponent implements OnInit {

  public events: EventsService;
  public eventLocal;


  constructor(public eventsService: EventsService) {
   this.events = eventsService;

    console.log(this.events);

   // this.userLocal = JSON.parse(localStorage.getItem('events'));

  }


  ngOnInit() {
  }

}


