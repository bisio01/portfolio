/**
 * Created by vladimirzinyak on 10.07.17.
 */
import * as _ from "lodash";
import { Injectable }    from '@angular/core';


@Injectable()
export class SportListService {

  currentSkillsId:number;

  public skills: any = [
    {
      id: '01',
      name: 'Basketball',
      img: 'assets/img/sport-skills/basketball.jpg',
      value: 'basketball',
      icon: 'assets/img/sport-skills/icons/basketball.svg'

    },
    {
      id: '02',
      name: 'Boxers',
      img: 'assets/img/sport-skills/boxers.jpg',
      value: 'boxers',
      icon: 'assets/img/sport-skills/icons/boxing-groves.svg'
    },
    {
      id: '03',
      name: 'Bicycle rider',
      img: 'assets/img/sport-skills/female-cyclist.jpg',
      value: 'Bicycle rider',
      icon: 'assets/img/sport-skills/icons/bicycle-rider.svg'
    },
    {
      id: '04',
      name: 'Golf',
      img: 'assets/img/sport-skills/golfers.jpg',
      value: 'Golf',
      icon: 'assets/img/sport-skills/icons/golf.svg'
    },
    {
      id: '05',
      name: 'Hockey',
      img: 'assets/img/sport-skills/hockey.jpg',
      value: 'Hockey',
      icon: 'assets/img/sport-skills/icons/hockey.svg'
    },
    {
      id: '06',
      name: 'Skier skiing',
      img: 'assets/img/sport-skills/skier-skiing-downhill.jpg',
      value: 'Skier skiing',
      icon: 'assets/img/sport-skills/icons/snowboard-equipment.svg'
    },
    {
      id: '07',
      name: 'Soccer',
      img: 'assets/img/sport-skills/soccer.jpg',
      value: 'Soccer',
      icon: 'assets/img/sport-skills/icons/football.svg'
    },
    {
      id: '08',
      name: 'Swimming pool',
      img: 'assets/img/sport-skills/swimming-pool.jpg',
      value: 'Swimming pool',
      icon: 'assets/img/sport-skills/icons/man-swimming.svg'
    },
    {
      id: '09',
      name: 'Tennis',
      img: 'assets/img/sport-skills/tennis.jpg',
      value: 'Tennis',
      icon: 'assets/img/sport-skills/icons/tennis.svg'
    },
    {
      id: '10',
      name: 'Volleyball',
      img: 'assets/img/sport-skills/volleyball.jpg',
      value: 'Volleyball',
      icon: 'assets/img/sport-skills/icons/volleyball-silhouette.svg'
    }

  ];

  constructor() {
    /*if(!!localStorage.getItem('sportSkills')){
      this.sportSkills = JSON.parse(localStorage.getItem('sportSkills') || '[]');
    }*/

  }

  public getById(id) {
    return new Promise((resolve, reject) => {
      const f = this.skills.filter(el => el.id == id);
      if(f.length){
        this.currentSkillsId = id;
        resolve(f[0]);
      }else {
        reject();
      }

    })
  }

  public getList() {
    return new Promise((resolve, reject)=> {
      if(this.skills) {
        resolve(this.skills)
      } else {
        reject();
      }

    })
  }

}
