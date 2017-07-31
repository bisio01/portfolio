import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { EventsService } from '../../../events/service/events.service';
import { trigger, style, animate, transition, query } from '@angular/animations';
//import { routerTransition } from '../../../animations/animations';



@Component({
  selector: 'app-user-events',
  templateUrl: 'user-events.component.html',
  styleUrls: ['user-events.component.css'],
/*  animations: [
    routerTransition()
  ]*/

})
export class UserEventsComponent implements OnInit {

  public events: any[] = [];
  public myEvents: any[] = [];

  constructor(public eventsService: EventsService) {
    this.loadData()
  }
  loadData() {
    this.eventsService.getList('events').then((res: any[])=>{
      this.events = res
    });

    this.eventsService.getList('myEvents').then((res: any[])=>{
      this.myEvents = res
    })
  }

/*  @HostBinding('@pageAnimation')
  public doAnimate = true;*/

  addEvent(id) {
    this.eventsService.addEvent(id).then(() => {
      this.loadData();
    })
  }

  exitEvent(id) {
    this.eventsService.exitEvent(id).then(() => {
      this.loadData();
    })
  }

  ngOnInit() {
  }

}
