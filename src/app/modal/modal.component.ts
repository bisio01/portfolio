import {Component} from '@angular/core';
import { SportListService } from '../service/sport-list.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})
export class ModalDialog {

  public result = 'hui';

  public skills: any[] = [];

  public eventSkillVal;

  constructor(public sportListService: SportListService) {
    sportListService.getList().then((res: any[])=>{
      this.skills = res;
    });

  }

  public eventSkillsForm: FormGroup = new FormGroup({
    skills: new FormControl('', [])
  });

  choseSkills(){
    let eventSkillVal = this.eventSkillsForm.value;
    console.log(this.eventSkillVal , 'eventSkillVal');
  }

  dialogResult(){
    console.log(this.eventSkillVal , 'eventSkillVal');
    return 'sadsadadasd'
  }
}

