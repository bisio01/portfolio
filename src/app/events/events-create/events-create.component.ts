import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MdDatepicker, MdDialog } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EventsService } from '../service/events.service';
import { Router } from '@angular/router';
import { ModalDialog } from '../../modal/modal.component';

@Component({
  selector: 'app-events-create',
  templateUrl: 'events-create.component.html',
  styleUrls: ['events-create.component.css']
})
export class EventsCreateComponent implements OnInit, AfterViewInit {

  private linksArr: any;
  private _subscribers: Subscription[] = [];
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
    sportSkill: new FormControl('', [])
  });


  constructor(public eventsService: EventsService,
              private _router: Router,
              public dialog: MdDialog) {


  }

  public openDialog() {
    this.dialog.open(ModalDialog).afterClosed().subscribe(result => {

      this.eventForm.get('sportSkill').setValue(result);
      console.log(`Dialog result: ${result}`);
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
    console.log(eventVal , 'qweqwe');
    this.eventsService.create(eventVal);
    this._router.navigate(['/events/list']);
  }





  ngOnInit() {

  }


  ngAfterViewInit() {
    this.formToggle();
  }

}
