import { Component, OnInit, Injector } from '@angular/core';
import { EventsInnerBaseComponent } from '../events.inner.base.component';
import { EventsService } from '../../service/events.service';

@Component({
  selector: 'app-events-info',
  templateUrl: './events-info.component.html',
  styleUrls: ['./events-info.component.css']
})
export class EventsInfoComponent extends EventsInnerBaseComponent {
  public id: any;

  constructor(public injector: Injector,
              public eventsService: EventsService) {
    super(injector);

    this.loadCurrentEvent()
  }

  loadCurrentEvent() {
    this.eventsService.getById(this.id).then((res) => {
      this.currentEvent = res;
      console.log(this.currentEvent, 'this.currentEvent')
    }, (err)=>{
      console.log('errrrrrror')
    });
  }

}
