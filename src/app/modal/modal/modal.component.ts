import {Component} from '@angular/core';
import { SportListService } from '../../service/sport-list.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

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

  public eventSkillsForm: FormGroup = new FormGroup({
    form_type: new FormControl('')
  });


  public result = this.eventSkillsForm.value;

  dialogResult(){
    this.result = this.eventSkillsForm.value.form_type;
    return this.result;
  }
}

