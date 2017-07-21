/**
 * Created by vladimirzinyak on 20.06.17.
 */

import { Injectable }    from '@angular/core';

@Injectable()

export class PlacesService {
  currentPlaceId: number;

  public places: any = [
    {
      id: '01',
      title: 'Expressa vero in iis aetatibus',
      city: 'Kharkiv',
      date: '20.12.2012',
      img: ''

    },
    {
      id: '02',
      title: 'Expressa vero in iis aetatibus',
      city: 'Kharkiv',
      date: '20.12.2012',
      img: ''

    },
    {
      id: '03',
      title: 'Expressa vero in iis aetatibus',
      city: 'Kharkiv',
      date: '20.12.2012',
      img: ''

    },
    {
      id: '04',
      title: 'Expressa vero in iis aetatibus',
      city: 'Kharkiv',
      date: '20.12.2012',
      img: ''

    },
    {
      id: '05',
      title: 'Expressa vero in iis aetatibus',
      city: 'Kharkiv',
      date: '20.12.2012',
      img: ''

    },
  ];

  constructor() {
    if(!!localStorage.getItem('places')){
      this.places = JSON.parse(localStorage.getItem('places') || '[]');
    }

    this.updateStore();
  }

  private updateStore() {
    localStorage.setItem('places', JSON.stringify(this.places));
  }

  public getById(id: number) {
    return new Promise((resolve, reject) => {
      const f = this.places.filter(el => el.id == id);
      if(f.length){
        this.currentPlaceId = id;
        resolve(f[0]);
      }else {
        reject();
      }
    })
  }

  public getCurrentPlace() {
    return new Promise((resolve, reject) => {
      const f = this.places.filter(el => el.id == this.currentPlaceId);
      if(f.length){
        resolve(f[0]);
      }else {
        reject();
      }

    })
  }

  public getList(filter?: string) {
    return new Promise((resolve, reject)=> {
      if(this.places) {
        let arr = [];
        if (filter === 'myPlaces') {
          arr = this.places.filter(el => !!el.join)
        } else if (filter === 'places') {
          arr = this.places.filter(el => !(!!el.join))
        } else {
          arr = this.places;
        }
        resolve(arr)
      } else {
        reject();
      }
    })
  }

  public addPlace(id) {
    return new Promise((resolve, reject) => {
      this.places = this.places.map(el => {
        return Object.assign({}, el, {
          join: el.join ? true : el.id == id
        })
      });
      this.updateStore();
      resolve(true);
    })
  }

  public exitPlace(id) {
    return new Promise((resolve, reject) => {
      this.places = this.places.map(el => {
        return Object.assign({}, el,  {
          join: el.id == id ? false : el.join
        })
      });
      this.updateStore();
      resolve(true)
    })
  }
}
