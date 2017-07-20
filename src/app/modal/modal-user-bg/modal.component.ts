import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserBgList } from '../../service/user-bg.service';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})
export class ModalBgDialog {

  public userBg: any[] = [];

  constructor(public userBgList: UserBgList) {
    userBgList.getList().then((res: any[])=>{
      this.userBg = res;
      console.log(this.userBg , 'this.userBg ')
    });

  }

  public userBgForm: FormGroup = new FormGroup({
    form_bg: new FormControl('')
  });

  public result = this.userBgForm.value;

  public add() {
    console.log(this.userBgForm.value.form_bg, 'result')
  }

  dialogResult(){
    this.result = this.userBgForm.value.form_bg;
    return this.result;

  }
}

