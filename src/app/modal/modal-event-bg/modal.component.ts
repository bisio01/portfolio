import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventBgList } from '../../service/event-bg.service';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})
export class ModalEventBgDialog {

  public eventBg: any[] = [];

  constructor(public eventBgList: EventBgList) {
    eventBgList.getList().then((res: any[])=>{
      this.eventBg = res;
    });

  }

  public eventBgForm: FormGroup = new FormGroup({
    form_bg: new FormControl('')
  });

  public result = this.eventBgForm.value;

  public add() {
    console.log(this.eventBgForm.value.form_bg, 'result')
  }

  dialogResult(){
    this.result = this.eventBgForm.value.form_bg;
    return this.result;

  }
}

