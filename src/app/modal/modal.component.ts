import {Component} from '@angular/core';
import { SportListService } from '../service/sport-list.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})
export class ModalDialog {

  public skills: any[] = [];

  public eventSkillVal;

  constructor(public sportListService: SportListService) {
    sportListService.getList().then((res: any[])=>{
      this.skills = res;
    });

  }

  public eventSkillsForm: FormGroup = new FormGroup({
    form_type: new FormControl('')
  });


  public result = this.eventSkillsForm.value;


  choseSkills(){
    // this.result = this.eventSkillsForm.value.form_type;
    console.log(this.result, this.eventSkillsForm.value);
    //console.log(eventSkillVal , 'eventSkillVal');
  }

  dialogResult(){
    this.result = this.eventSkillsForm.value.form_type;
    return this.result;

   // let eventSkillVal = ;
   // console.log(eventSkillVal , 'eventSkillVal');
   // return this.result = eventSkillVal;

  }
}

