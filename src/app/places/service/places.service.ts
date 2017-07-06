/**
 * Created by vladimirzinyak on 20.06.17.
 */

import { Injectable }    from '@angular/core';

@Injectable()

export class PlacesService {
  currentPlacesId: number;

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
    console.log('constructor',this.places);
  }

  private updateStore() {
    localStorage.setItem('places', JSON.stringify(this.places));
    console.log(localStorage, 'local')
  }


  public getList() {
    return new Promise((resolve, reject)=> {
      if(this.places) {
        resolve(this.places)
      } else {
        reject();
      }

    })
  }
}
