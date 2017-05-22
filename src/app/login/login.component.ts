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
    form_type: new FormControl('simple'),
  });



  post:any;
  /*rForm : FormGroup;

  firstName:string = '';
  lastName:string = '';
  gender:string = '';*/

  constructor(private fb: FormBuilder) {
    /*this.rForm = fb.group({
      'first-name' : [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'last-name' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])],
      'email' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'pass' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'validate' : ''
    });*/
  };



  public setInviteType(event, data: string): void {
    event.preventDefault();
    this.rForm.controls['form_type'].patchValue(data);
  }
  
  public addPost(post) {
    this.rForm.controls['lastName'] = post.lastName;
    this.rForm.controls['firstName'] = post.firstName;
  }


  ngOnInit() {
  }

}


