import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  firstName:string = '';
  lastName:string = '';

  public UserForm:FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    form_type: new FormControl(''),
  });

  public viewUser() {
    this.firstName = this.UserForm.value.firstName;
    this.lastName = this.UserForm.value.lastName;
  }


}
