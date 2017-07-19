import { Component, OnInit, Injectable, Injector } from '@angular/core';
import { PeopleService } from '../service/people.service';

@Injectable()
export class EventsInnerBaseComponent {
  service: PeopleService;
  currentEvent: any = {};

  constructor(public injector: Injector) {
    this.service = injector.get(PeopleService);
    this.service.getCurrentPeople().then((res) => {
      this.currentEvent = res;
    });

  }

}
