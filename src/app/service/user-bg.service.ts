/**
 * Created by vladimirzinyak on 10.07.17.
 */
import * as _ from "lodash";
import { Injectable }    from '@angular/core';


@Injectable()
export class UserBgList {

  currentBgId:number;

  public userBgList: any = [
    {
      id: '01',
      img: 'assets/img/user-bg/cyclists-trail.jpeg',
      value: 'cyclists-trail',
    },
    {
      id: '02',
      img: 'assets/img/user-bg/pexels-photo.jpg',
      value: 'pexels-photo',
    },
    {
      id: '03',
      img: 'assets/img/user-bg/pexels-photo-1.jpeg',
      value: 'pexels-photo-1',
    },
    {
      id: '04',
      img: 'assets/img/user-bg/pexels-photo-2.jpeg',
      value: 'pexels-photo-2',
    },
    {
      id: '05',
      img: 'assets/img/user-bg/pexels-photo-3.jpeg',
      value: 'pexels-photo-3',
    },
    {
      id: '06',
      img: 'assets/img/user-bg/pexels-photo-4.jpeg',
      value: 'pexels-photo-4',
    },
    {
      id: '07',
      img: 'assets/img/user-bg/pexels-photo-5.jpeg',
      value: 'pexels-photo-5',
    },
    {
      id: '08',
      img: 'assets/img/user-bg/pexels-photo-6.jpeg',
      value: 'pexels-photo-6',
    },
    {
      id: '09',
      img: 'assets/img/user-bg/pexels-photo-9.jpeg',
      value: 'pexels-photo-9',
    },
    {
      id: '10',
      img: 'assets/img/user-bg/utah-mountain.jpeg',
      value: 'tah-mountain',
    }

  ];

  constructor() {
    /*if(!!localStorage.getItem('sportSkills')){
     this.sportSkills = JSON.parse(localStorage.getItem('sportSkills') || '[]');
     }*/

  }

  public getById(id) {
    return new Promise((resolve, reject) => {
      const f = this.userBgList.filter(el => el.id == id);
      if(f.length){
        this.currentBgId = id;
        resolve(f[0]);
      }else {
        reject();
      }

    })
  }

  public getList() {
    return new Promise((resolve, reject)=> {
      if(this.userBgList) {
        resolve(this.userBgList)
      } else {
        reject();
      }

    })
  }

}
