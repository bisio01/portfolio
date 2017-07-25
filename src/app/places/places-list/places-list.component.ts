import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { PlacesService } from '../service/places.service';
import { SportListService } from '../../service/sport-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-places-list',
  templateUrl: 'places-list.component.html',
  styleUrls: ['places-list.component.css'],
  animations: [

  ]
})
export class PlacesListComponent implements OnInit {

  public data;

  public skills: any[] = [];

  public places: any[] = [];
  public myPlaces: any[] = [];

  constructor(public placesService: PlacesService,
              public sportListService: SportListService) {
    placesService.getList().then((res: any[])=>{
      this.places = res;
    });

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

  addPlace(id) {
    this.placesService.addPlace(id).then(() => {
      this.loadData();
    })
  }

  exitPlace(id) {
    this.placesService.exitPlace(id).then(() => {
      this.loadData();
    })
  }

  ngOnInit() {
    this.data = Observable.forkJoin(
      this.placesService.getList('places'),
      this.placesService.getList('myPlaces'),
      this.sportListService.getList()
    );
    this.data.subscribe(
      data => {
        this.places = data[0];
        this.myPlaces = data[1];
        this.skills = data[2];

        this.places.forEach(function (item: any,) {
          this.skills.forEach(function (skillItem: any) {
            if (skillItem.id === item.sportSkill) {
              item.sportSkill = skillItem;
            }
          });


        }.bind(this));
        this.myPlaces.forEach(function (item: any,) {
        });

      }
    )
  }

}
