import { Component, OnInit, Injector } from '@angular/core';
import { EventsInnerBaseComponent } from '../events.inner.base.component';

@Component({
  selector: 'app-events-info',
  templateUrl: './events-info.component.html',
  styleUrls: ['./events-info.component.css']
})
export class EventsInfoComponent extends EventsInnerBaseComponent {
  constructor(public injector: Injector) {
    super(injector);
  }

}
