import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-events-page',
  templateUrl: 'events-page.component.html',
  styleUrls: ['events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  public events: any[] = [];
  public myEvents: any[] = [];
  public currentEvent = {};
  public id: any;

  constructor(public eventsService: EventsService,
              private activatedRoute: ActivatedRoute) {
    this.loadCurrentEvent();
  }

  addEvent(id) {
    this.eventsService.addEvent(id).then(() => {
      this.loadCurrentEvent();
    })
  }

  exitEvent(id) {
    this.eventsService.exitEvent(id).then(() => {
      this.loadCurrentEvent();
    })
  }

  loadCurrentEvent() {
    this.eventsService.getById(this.id).then((res) => {
      this.currentEvent = res;
      console.log(this.currentEvent, 'this.currentEvent')
    }, (err)=>{
      console.log('errrrrrror')
    });
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
    this.id = params['id'];
      this.loadCurrentEvent();
    });


  }

}
