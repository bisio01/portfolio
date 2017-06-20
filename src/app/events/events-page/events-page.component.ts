import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-events-page',
  templateUrl: 'events-page.component.html',
  styleUrls: ['events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  public events: EventsService;

  public currentEvent = {};

  constructor(public eventsService: EventsService,
              private activatedRoute: ActivatedRoute) {
    this.events = eventsService;


  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];


      this.events.getById(id).then((res) => {
        this.currentEvent = res;
      }, (err)=>{
        console.log('errrrrrror')
      });
    });


  }

}
