import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { PlacesService } from '../service/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: 'places-list.component.html',
  styleUrls: ['places-list.component.css'],
  animations: [

  ]
})
export class PlacesListComponent implements OnInit {

  public places: any[] = [];

  constructor(public placesService: PlacesService) {
    placesService.getList().then((res: any[])=>{
      this.places = res;
    });

  }

  ngOnInit() {
  }

}
