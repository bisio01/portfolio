/**
 * Created by vladimirzinyak on 10.07.17.
 */
import { Injectable }    from '@angular/core';


@Injectable()
export class EventBgList {

  currentBgId:number;

  public eventBgList: any = [
    {
      id: '01',
      img: 'assets/img/event-bg/event-bg.jpeg',
      value: 'event-bg',
    },
    {
      id: '02',
      img: 'assets/img/event-bg/pexels-photo-1.jpeg',
      value: 'pexels-photo-1',
    },
    {
      id: '03',
      img: 'assets/img/event-bg/pexels-photo-2.jpeg',
      value: 'pexels-photo-2',
    },
    {
      id: '04',
      img: 'assets/img/event-bg/pexels-photo-3.jpeg',
      value: 'pexels-photo-3',
    },
    {
      id: '05',
      img: 'assets/img/event-bg/pexels-photo-4.jpeg',
      value: 'pexels-photo-4',
    },
    {
      id: '06',
      img: 'assets/img/event-bg/pexels-photo-5.jpeg',
      value: 'pexels-photo-5',
    },
    {
      id: '07',
      img: 'assets/img/event-bg/pexels-photo-6.jpeg',
      value: 'pexels-photo-6',
    }

  ];

  constructor() {
  }

  public getById(id) {
    return new Promise((resolve, reject) => {
      const f = this.eventBgList.filter(el => el.id == id);
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
      if(this.eventBgList) {
        resolve(this.eventBgList)
      } else {
        reject();
      }

    })
  }

}
