import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titleAlert:string = 'This field is required';
  public rForm: FormGroup = new FormGroup({
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
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    form_type: new FormControl(''),
  });

  firstName:string = '';
  lastName:string = '';
  gender:string = '';

  constructor(private fb: FormBuilder) {
    /*this.rForm = fb.group({
      'first-name' : [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'last-name' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])],
      'email' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'pass' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'validate' : ''
    });*/
  };



  public addPost(post) {

     this.firstName = this.rForm.value.firstName;
     this.gender = this.rForm.value.form_type;

  }


  ngOnInit() {
  }

}


