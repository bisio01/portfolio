/**
 * Created by vladimirzinyak on 20.06.17.
 */

import { Injectable }    from '@angular/core';

@Injectable()

export class PeopleService {
  currentPeopleId: number;

  public people: any = [
    {
      id: '01',
      name: 'Erin Stewart',
      city: 'Kharkiv',
      avatar: '',
      isFriend: true,
    },
    {
      id: '02',
      name: 'Erin Stewart',
      city: 'Kharkiv',
      avatar: '',
      isFriend: true
    },
    {
      id: '03',
      name: 'Erin Stewart',
      city: 'Kharkiv',
      avatar: '',
      isFriend: ''
    },
    {
      id: '04',
      name: 'Erin Stewart',
      city: 'Kharkiv',
      avatar: '',
      isFriend: ''
    },
    {
      id: '05',
      name: 'Erin Stewart',
      city: 'Kharkiv',
      avatar: '',
      isFriend: ''
    },
    {
      id: '06',
      name: 'Erin Stewart',
      city: 'Kharkiv',
      avatar: '',
      isFriend: ''
    },
    {
      id: '07',
      name: 'Erin Stewart',
      city: 'Kharkiv',
      avatar: '',
      isFriend: ''
    },
    {
      id: '08',
      name: 'Erin Stewart',
      city: 'Kharkiv',
      avatar: '',
      isFriend: ''
    },
  ];

  constructor() {
    if (!!localStorage.getItem('people')) {
      this.people = JSON.parse(localStorage.getItem('people') || '[]');
    }

    this.updateStore();
    console.log('constructor', this.people);
  }

  private updateStore() {
    localStorage.setItem('people', JSON.stringify(this.people));
    console.log(localStorage, 'local')
  }


  public getList(filter?: string) {
    return new Promise((resolve, reject) => {
      if (this.people) {
        let arr = [];
        if(filter === 'friends'){
          arr = this.people.filter(el =>  !!el.isFriend )
        }else if(filter === 'notfriends'){
          arr = this.people.filter(el =>  !(!!el.isFriend) )
        }else{
          arr = this.people;
        }
        resolve(arr)
      } else {
        reject();
      }

    })
  }


  public addToFriend(id) {
    return new Promise((resolve, reject)=>{
      this.people = this.people.map(el=> {
        return Object.assign({}, el, {isFriend: el.isFriend ? true : el.id == id})
      });
      resolve(true)
    });
  }

}
