import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../places/service/places.service';

@Component({
  selector: 'app-people-places',
  templateUrl: './people-places.component.html',
  styleUrls: ['./people-places.component.css']
})
export class PeoplePlacesComponent implements OnInit {

  public places: any[] = [];

  constructor(public placesService: PlacesService) {
    placesService.getList().then((res: any[])=>{
      this.places = res;
    });
  }

  ngOnInit() {
  }

}
