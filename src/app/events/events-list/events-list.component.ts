import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';
import { SportListService } from '../../service/sport-list.service';
import { Observable } from 'rxjs';
import { IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['events-list.component.css']
})


export class EventsListComponent implements OnInit {

  public data;

  public user;

  public events: any[] = [];
  public myEvents: any[] = [];

  public skills: any[] = [];
  public sillsInfo;

  private myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

  // For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
  // to set initial date range value using the selDateRange attribute.
  private model: Object = {beginDate: {year: 2018, month: 10, day: 9},
    endDate: {year: 2018, month: 10, day: 19}};

  constructor(public eventsService: EventsService,
              public sportListService: SportListService) {
    sportListService.getList().then((res: any[]) => {
      this.skills = res;
    });

    this.user = JSON.parse(localStorage.getItem('user'));

    this.loadData();
  }

  loadData() {
    this.eventsService.getList('events').then((res: any[]) => {
      this.events = res;
    });

    this.eventsService.getList('myEvents').then((res: any[]) => {
      this.myEvents = res
    })
  }

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
    this.data = Observable.forkJoin(
      this.eventsService.getList('events'),
      this.eventsService.getList('myEvents'),
      this.sportListService.getList()
    );
    this.data.subscribe(
      data => {
        this.events = data[0];
        this.myEvents = data[1];
        this.skills = data[2];

        this.events.forEach(function (item: any,) {
          this.skills.forEach(function (skillItem: any) {
            if (skillItem.id === item.sportSkill) {
              item.sportSkill = skillItem;
            }
          });


        }.bind(this));
        this.myEvents.forEach(function (item: any,) {
        });

      }
    )
  }

}


