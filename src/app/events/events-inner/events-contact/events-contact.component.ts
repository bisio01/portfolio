import { Component, OnInit } from '@angular/core';
declare let google: any;
@Component({
  selector: 'app-events-place',
  templateUrl: 'events-contact.component.html',
  styleUrls: ['events-contact.component.css']
})
export class EventsContactComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
