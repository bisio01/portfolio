import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../service/places.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SportListService } from '../../service/sport-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-places-page',
  templateUrl: 'places-page.component.html',
  styleUrls: ['places-page.component.css']
})
export class PlacesPageComponent implements OnInit {

  public data;
  public places: any[] = [];
  public myPlaces: any[] = [];
  public currentPlace = {};
  public id: any;
  public skills: any[] = [];


  constructor(public placesService: PlacesService,
              private activatedRoute: ActivatedRoute,
              public sportListService: SportListService) {
    this.loadCurrentEvent();

  }

  addPlace(id) {
    this.placesService.addPlace(id).then(() => {
      this.loadCurrentEvent();
    })
  }

  exitPlace(id) {
    this.placesService.exitPlace(id).then(() => {
      this.loadCurrentEvent();
    })
  }

  loadCurrentEvent() {
    this.placesService.getById(this.id).then((res) => {
      this.currentPlace = res;
      console.log(this.currentPlace, 'this.currentEvent')
    }, (err)=>{
      console.log('errrrrrror')
    });
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadCurrentEvent();
    });

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
