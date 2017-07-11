import {Component} from '@angular/core';
import { SportListService } from '../service/sport-list.service';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})
export class ModalDialog {


  public skills: any[] = [];

  constructor(public sportListService: SportListService) {
    sportListService.getList().then((res: any[])=>{
      this.skills = res;
    });

  }
}

