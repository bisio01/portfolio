import { Component, OnInit, Injector } from '@angular/core';
import { EventsInnerBaseComponent } from '../events.inner.base.component';

@Component({
  selector: 'app-events-people',
  templateUrl: './events-people.component.html',
  styleUrls: ['./events-people.component.css']
})
export class EventsPeopleComponent extends EventsInnerBaseComponent{

  constructor(public injector: Injector) {
    super(injector);
  }

}
