import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MdDatepicker } from '@angular/material';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-events-create',
  templateUrl: 'events-create.component.html',
  styleUrls: ['events-create.component.css']
})
export class EventsCreateComponent implements OnInit, AfterViewInit {

  private linksArr: any;
  private _subscribers: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(MdDatepicker) datepicker: MdDatepicker<Date>;

  private formToggle() {
    this.linksArr = $('.form-group');
    let clickSource = Observable.fromEvent(this.linksArr, 'click');
    this._subscribers.push(clickSource.subscribe((e: Event) => {
      let $form = $(e.currentTarget);
      if(!($form.hasClass('focused'))){
        this.linksArr.removeClass('focused');
        $form.addClass('focused');
      } else {

      }


    }));
  }

  ngAfterViewInit() {
    this.formToggle();
  }

}
