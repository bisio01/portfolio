import * as _ from "lodash";
import { Injectable }    from '@angular/core';

@Injectable()

export class EventsService {

  currentEventId:number;

  public events: any = [
    {
      id: '01',
      title: 'Great Bike Ride11',
      date: '10.08.2017',
      description: 'If you like riding welcome!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      author: 'Sergiy Ivanenko',
      city: 'Kharkiv',
      time: '12:00',
      people: '10',
      join: true
    },
    {
      id: '02',
      title: 'Great Bike Ride22',
      date: '10.08.2017',
      description: 'If you like riding welcome!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      author: 'Sergiy Ivanenko',
      city: 'Kharkiv',
      time: '12:00',
      people: '10',
      join: true
    },
    {
      id: '03',
      title: 'Great Bike Ride33',
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
    if(!!localStorage.getItem('events')){
      this.events = JSON.parse(localStorage.getItem('events') || '[]');
    }
    this.updateStore();
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

  public getList(filter?: string) {
    return new Promise((resolve, reject)=> {
      if(this.events) {
        let arr = [];
        if (filter === 'myEvents') {
          arr = this.events.filter(el => !!el.join)
        } else if (filter === 'events') {
          arr = this.events.filter(el => !(!!el.join))
        } else {
          arr = this.events;
        }
        resolve(arr)
      } else {
        reject();
      }
    })
  }

  public addEvent(id) {
    return new Promise((resolve, reject) => {
      this.events = this.events.map(el => {
        return Object.assign({}, el, {
          join: el.join ? true : el.id == id
        })
      });
      this.updateStore();
      resolve(true);
    })
  }

  public exitEvent(id) {
     return new Promise((resolve, reject) => {
      this.events = this.events.map(el => {
        return Object.assign({}, el,  {
          join: el.id == id ? false : el.join
        })
      });
       this.updateStore();
       resolve(true)
     })
  }

  public updateStore() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }

}







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



