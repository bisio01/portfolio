import {Component} from '@angular/core';
import { SportListService } from '../../service/sport-list.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})
export class  ModalMultipleDialog {

  public skills: any[] = [];
  public skillsIds: string[] = [];

  constructor(public sportListService: SportListService) {
    sportListService.getList().then((res: any[])=>{
      this.skills = res;
    });


  }

  public add() {
    console.log(this.skillsIds, 'skillsIds');
  }

  public updateCheckedOptions(option, event) {
    this.skillsIds.push(option.id);

    //this.optionsMap[option] = event.target.checked;
  }


  public userSkillsForm: FormGroup = new FormGroup({
    form_type: new FormControl('')
  });


  public result = this.skillsIds;

  dialogResult(){
    this.result = this.skillsIds;
    return this.result;
  }
}

