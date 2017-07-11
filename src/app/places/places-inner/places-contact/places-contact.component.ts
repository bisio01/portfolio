import { Component, OnInit } from '@angular/core';
declare let google: any;

@Component({
  selector: 'app-places-contact',
  templateUrl: './places-contact.component.html',
  styleUrls: ['./places-contact.component.css']
})
export class PlacesContactComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {

  }


  ngOnInit() {


  }
}
