import * as _ from "lodash";
import { Injectable }    from '@angular/core';


@Injectable()
export class EventsService {

  currentEventId:number;

  public events: any = [
    {
      id: '01',
      title: 'Great Bike Ride',
      date: '10.08.2017',
      description: 'If you like riding welcome!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      author: 'Sergiy Ivanenko',
      city: 'Kharkiv',
      time: '12:00',
      people: '10'

    },
    {
      id: '02',
      title: 'Great Bike Ride',
      date: '10.08.2017',
      description: 'If you like riding welcome!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      author: 'Sergiy Ivanenko',
      city: 'Kharkiv',
      time: '12:00',
      people: '10'

    },
    {
      id: '03',
      title: 'Great Bike Ride',
      date: '10.08.2017',
      description: 'If you like riding welcome!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      author: 'Sergiy Ivanenko',
      city: 'Kharkiv',
      time: '12:00',
      people: '10'

    },
    {
      id: '04',
      title: 'Great Bike Ride',
      date: '10.08.2017',
      description: 'If you like riding welcome!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      author: 'Sergiy Ivanenko',
      city: 'Kharkiv',
      time: '12:00',
      people: '10'

    },
    {
      id: '05',
      title: 'Great Bike Ride',
      date: '10.08.2017',
      description: 'If you like riding welcome!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      author: 'Sergiy Ivanenko',
      city: 'Kharkiv',
      time: '12:00',
      people: '10'

    },
  ];

  constructor() {
    this.events = JSON.parse(localStorage.getItem('events') || '[]');
  }

  private updateStore() {
    localStorage.setItem('events', JSON.stringify(this.events));
    console.log(localStorage, 'local')
  }

  public create(data: {}) {
    this.events.push({...data, id: Date.now()});
    console.log(this.events, 'events');
    this.updateStore();
  }

  public getById(id: number) {
    return new Promise((resolve, reject) => {
      const f = this.events.filter(el => el.id == id);
      if(f.length){
        this.currentEventId = id;
        resolve(f[0]);
      }else {
        reject();
      }

    })
  }

  public getCurrentEvent() {
    return new Promise((resolve, reject) => {
      const f = this.events.filter(el => el.id == this.currentEventId);
      if(f.length){
        resolve(f[0]);
      }else {
        reject();
      }

    })
  }

  public getList() {
    return new Promise((resolve, reject)=> {
      if(this.events) {
        resolve(this.events)
      } else {
        reject();
      }

    })
  }


}

/*export class Events {
 completed: Boolean;
 editing: Boolean;

 private _title: String;
 get title() {
 return this._title;
 }
 set title(value: String) {
 this._title = value.trim();
 }

 constructor(title: String) {
 this.completed = false;
 this.editing = false;
 this.title = title.trim();
 }
 }*/







/*  private getWithCompleted(completed: Boolean) {
 return this.events.filter((event: Events) => event.completed === completed);
 }

 allCompleted() {
 return this.events.length === this.getCompleted().length;
 }

 setAllTo(completed: Boolean) {
 this.events.forEach((t: Events) => t.completed = completed);
 this.updateStore();
 }

 removeCompleted() {
 this.events = this.getWithCompleted(false);
 this.updateStore();
 }

 getRemaining() {
 return this.getWithCompleted(false);
 }

 getCompleted() {
 return this.getWithCompleted(true);
 }

 toggleCompletion(event: Events) {
 event.completed = !event.completed;
 this.updateStore();
 }*/



