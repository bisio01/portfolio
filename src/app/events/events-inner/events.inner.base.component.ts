import { Component, OnInit, Injectable, Injector } from '@angular/core';
import { EventsService } from '../service/events.service';

@Injectable()
export class EventsInnerBaseComponent {
  service: EventsService;
  currentEvent: any = {};

  constructor(public injector: Injector) {
    this.service = injector.get(EventsService);
    this.service.getCurrentEvent().then((res) => {
      this.currentEvent = res;
    });

  }

}
