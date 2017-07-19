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
      name: 'Katrin Lorem',
      city: 'Kiev',
      avatar: '',
      isFriend: true
    },
    {
      id: '03',
      name: 'Kim Seme',
      city: 'Paris',
      avatar: '',
      isFriend: ''
    },
    {
      id: '04',
      name: 'Erin22 Stewart',
      city: 'Kharkiv',
      avatar: '',
      isFriend: ''
    },
    {
      id: '05',
      name: 'Erin Stewart123',
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
      name: 'Erin22 Stewart',
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
  }


  public getList(filter?: string) {
    return new Promise((resolve, reject) => {
      if (this.people) {
        let arr = [];
        if (filter === 'friends') {
          arr = this.people.filter(el => !!el.isFriend)
        } else if (filter === 'notfriends') {
          arr = this.people.filter(el => !(!!el.isFriend))
        } else {
          arr = this.people;
        }
        resolve(arr)
      } else {
        reject();
      }

    })
  }


  public addToFriend(id) {
    return new Promise((resolve, reject) => {
      this.people = this.people.map(el => {
        return Object.assign({}, el, {
          isFriend: el.isFriend ? true : el.id == id
        })
      });
      this.updateStore();
      resolve(true)
    });

  }

  public deleteFriend(id) {
    return new Promise((resolve, reject) => {
      this.people = this.people.map(el => {
        return Object.assign({}, el, {
          isFriend: el.id == id ? false : el.isFriend
        });

      });
      this.updateStore();
      resolve(true);
    });

  }

  public updateStore() {
    localStorage.setItem('people', JSON.stringify(this.people));
    console.log(localStorage, 'local')
  }

  public getById(id: number) {
    return new Promise((resolve, reject) => {
      const f = this.people.filter(el => el.id == id);
      if(f.length){
        this.currentPeopleId = id;
        resolve(f[0]);
      }else {
        reject();
      }

    })
  }

  public getCurrentPeople() {
    return new Promise((resolve, reject) => {
      const f = this.people.filter(el => el.id == this.currentPeopleId);
      if(f.length){
        resolve(f[0]);
      }else {
        reject();
      }

    })
  }

}
