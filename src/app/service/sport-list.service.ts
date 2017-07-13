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
      name: 'Bike',
      img: 'assets/img/sport-skills/ic_directions_bike_black_24px.svg',
      value: 'Bike'

    },
    {
      id: '02',
      name: 'Flash Mob',
      img: 'assets/img/sport-skills/ic_directions_run_black_24px.svg',
      value: 'Flash Mob'

    },
    {
      id: '03',
      name: 'Paint Battle',
      img: 'assets/img/sport-skills/ic_palette_black_24px.svg',
      value: 'Paint Battle'
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
