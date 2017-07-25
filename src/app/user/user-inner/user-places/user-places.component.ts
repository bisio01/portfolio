import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../places/service/places.service';

@Component({
  selector: 'app-user-places',
  templateUrl: 'user-places.component.html',
  styleUrls: ['user-places.component.css']
})
export class UserPlacesComponent implements OnInit {

  public places: any[] = [];
  public myPlaces: any[] = [];

  constructor(public placesService: PlacesService) {
    this.loadData();
  }

  loadData() {
    this.placesService.getList('places').then((res: any[]) => {
      this.places = res;
    });

    this.placesService.getList('myPlaces').then((res: any[]) => {
      this.myPlaces = res
    })
  }

  ngOnInit() {
  }

}
