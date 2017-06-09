import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit, AfterViewInit {



  constructor(public userService: UserService) {
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

  public update() {
    let user = this.UserForm.value;

    this.userService.setData(user);

    localStorage.setItem('user', JSON.stringify(user));

  }
  ngAfterViewInit() {

  }

}
