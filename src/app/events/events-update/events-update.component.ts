import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EventsService } from '../service/events.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MdDialog, MdDatepicker } from '@angular/material';
import { SportListService } from '../../service/sport-list.service';
import { EventBgList } from '../../service/event-bg.service';
import { ModalDialog } from '../../modal/modal/modal.component';
import { ModalEventBgDialog } from '../../modal/modal-event-bg/modal.component';

@Component({
  selector: 'app-events-update',
  templateUrl: './events-update.component.html',
  styleUrls: ['./events-update.component.css']
})
export class EventsUpdateComponent implements OnInit, AfterViewInit{
  public data;
  public events: any[] = [];
  public bgList: any[] = [];
  public currentEvent: any = {};
  public id: any;
  private linksArr: any;
  private _subscribers: Subscription[] = [];
  public skills: any[] = [];
  public sillsInfo;
  public updateEventForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    link: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    author: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    hour: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(2),
    ]),
    minute: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(2),
    ]),
    date: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(2),
    ]),
    sportSkill: new FormControl('', []),
    eventBg: new FormControl('', [])
  });
  public eventBg;

  constructor(public eventsService: EventsService,
              private _router: Router,
              private activatedRoute: ActivatedRoute,
              public dialog: MdDialog,
              public sportListService: SportListService,
              public eventBgList: EventBgList) {
    sportListService.getList().then((res: any[]) => {
      this.skills = res;
    });

    this.loadCurrentEvent();

  }

  loadCurrentEvent() {
    this.eventsService.getById(this.id).then((res) => {
      this.currentEvent = res;

      this.updateEventForm.patchValue({
        title: this.currentEvent.title,
        address: this.currentEvent.address,
        description: this.currentEvent.description,
        website: this.currentEvent.website
        link: this.currentEvent.link,
        author: this.currentEvent.author,
        city: this.currentEvent.city,
        hour: this.currentEvent.hour,
        minute: this.currentEvent.minute,
        date: this.currentEvent.date,
        sportSkill: this.currentEvent.sportSkill,
        eventBg: this.currentEvent.eventBg,

      });

      console.log(this.currentEvent.sportSkill.icon, 'this.currentEvent');
      console.log(this.currentEvent, 'this.current')
    }, (err) => {
      console.log('errrrrrror')
    });
  }

  public openDialog() {
    this.dialog.open(ModalDialog).afterClosed().subscribe(result => {
      this.updateEventForm.get('sportSkill').setValue(result);
      this.sportListService.getById(result).then((res: any[]) => {
        this.sillsInfo = res;
      });

    });
  }

  public openBgDialog() {
    this.dialog.open(ModalEventBgDialog).afterClosed().subscribe(result => {
      this.updateEventForm.get('eventBg').setValue(result);
      this.eventBgList.getById(result).then((res: any[]) => {
        this.eventBg = res;
      });
    });
  }


  @ViewChild(MdDatepicker) datepicker: MdDatepicker<Date>;

  private formToggle() {
    this.linksArr = $('.form-group');
    let clickSource = Observable.fromEvent(this.linksArr, 'click');
    this._subscribers.push(clickSource.subscribe((e: Event) => {
      let $form = $(e.currentTarget);
      if (!($form.hasClass('focused'))) {
        this.linksArr.removeClass('focused');
        $form.addClass('focused');
      }
    }));
  }

  public updateEvent(event) {
    event.preventDefault();
    let eventId = this.currentEvent.id;
    let eventVal = this.updateEventForm.value;
    console.log(eventId, 'eventId');
    this.eventsService.update(eventId, eventVal);
    this._router.navigate(['/events/list']);
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


  ngAfterViewInit() {
    this.formToggle();
  }


}
