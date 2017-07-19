import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../service/people.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {

  public currentPeople= {};
  public id: any;

  constructor(public peopleService: PeopleService,
              private activatedRoute: ActivatedRoute,) {
    this.loadCurrentPeople();
  }

  loadCurrentPeople() {
    this.peopleService.getById(this.id).then((res) => {
      this.currentPeople = res;
    }, (err)=>{
      console.log('errrrrrror')
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadCurrentPeople();
    });
  }

}
