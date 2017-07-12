import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../places/service/places.service';

@Component({
  selector: 'app-user-places',
  templateUrl: 'user-places.component.html',
  styleUrls: ['user-places.component.css']
})
export class UserPlacesComponent implements OnInit {

  public places: any[] = [];

  constructor(public placesService: PlacesService) {
    placesService.getList().then((res: any[])=>{
      this.places = res;
    });
  }

  ngOnInit() {
  }

}
