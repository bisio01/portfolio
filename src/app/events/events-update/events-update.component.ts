import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EventsService } from '../service/events.service';
import { Router } from '@angular/router';
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


  private linksArr: any;
  private _subscribers: Subscription[] = [];
  public skills: any[] = [];
  public sillsInfo;
  public eventForm: FormGroup = new FormGroup({
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
              public dialog: MdDialog,
              public sportListService: SportListService,
              public eventBgList: EventBgList) {
    sportListService.getList().then((res: any[]) => {
      this.skills = res;
    });

  }

  public openDialog() {
    this.dialog.open(ModalDialog).afterClosed().subscribe(result => {
      this.eventForm.get('sportSkill').setValue(result);

      this.sportListService.getById(result).then((res: any[]) => {
        this.sillsInfo = res;
      });

    });
  }

  public openBgDialog() {
    this.dialog.open(ModalEventBgDialog).afterClosed().subscribe(result => {
      this.eventForm.get('eventBg').setValue(result);

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

  public createEvent(event) {
    event.preventDefault();
    let eventVal = this.eventForm.value;
    this.eventsService.create(eventVal);
    this._router.navigate(['/events/list']);
  }


  ngOnInit() {

  }


  ngAfterViewInit() {
    this.formToggle();
  }


}
