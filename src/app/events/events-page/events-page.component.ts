import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { SportListService } from '../../service/sport-list.service';
import { EventBgList } from '../../service/event-bg.service';

@Component({
  selector: 'app-events-page',
  templateUrl: 'events-page.component.html',
  styleUrls: ['events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  public data;
  public events: any[] = [];
  public myEvents: any[] = [];
  public currentEvent: any = {};
  public id: any;
  public skills: any[] = [];
  public bgImg: any[] = [];
  public bgList: any[] = [];

  constructor(public eventsService: EventsService,
              private activatedRoute: ActivatedRoute,
              public sportListService: SportListService,
              public eventBgList: EventBgList) {
    this.loadCurrentEvent();
    // this.bgImg = this.eventBgList.getList()
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
    }, (err) => {
      console.log('errrrrrror')
    });
  }

  public getBgById(id) {
    return this.bgImg.filter(el => el.id == id)[0];
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadCurrentEvent();
    });

    this.data = Observable.forkJoin(
      this.eventsService.getList('events'),
      this.sportListService.getList(),
      this.eventBgList.getList()
    );
    this.data.subscribe(
      data => {

        this.events = data[0];

        this.skills = data[1];
        this.bgList = data[2];

        this.events.forEach(function (item: any,) {
          this.skills.forEach(function (skillItem: any) {
            if (skillItem.id === item.sportSkill) {
              item.sportSkill = skillItem;
            }
          });


        }.bind(this));
        console.log(this.events, 'qweqweqweqwe');
        this.events.forEach(function (item: any,) {
          this.bgList.forEach(function (bgItem: any) {
            if (bgItem.id === item.eventBg) {
              item.eventBg = bgItem;
            }
          });
        }.bind(this));
      }
    )
  }
}
