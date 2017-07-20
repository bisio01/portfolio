import {Component} from '@angular/core';
import { SportListService } from '../../service/sport-list.service';
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
      console.log(this.userBg, 'this.userBg')
    });

  }

  public userBgForm: FormGroup = new FormGroup({
    form_type: new FormControl('')
  });


  public result = this.userBgForm.value;

  dialogResult(){
    this.result = this.userBgForm.value.form_type;
    return this.result;
  }
}

