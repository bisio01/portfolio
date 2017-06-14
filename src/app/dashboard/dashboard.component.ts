import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit, AfterViewInit {

  notification: number;

  constructor() { }

  notificationToggle(newValue: number) {
    if (this.notification === newValue) {
      this.notification = 0;
    }
    else {
      this.notification = newValue;
    }
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
