import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthenticationService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  titleAlert:string = 'This field is required';

  model: any = {};
  loading = false;
  returnUrl: string;

  email:string = '';
  password:string = '';
  gender:string = '';

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {

  }

  public rForm: FormGroup = new FormGroup({
    password: new FormControl('', [
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

  /*constructor(private fb: FormBuilder) {
   this.rForm = fb.group({
   'first-name' : [null, Validators.compose([Validators.required, Validators.minLength(3)])],
   'last-name' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])],
   'email' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
   'pass' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
   'validate' : ''
   });
   };*/


  login() {
    this.loading = true;
    this.authenticationService.login(this.rForm.value.email, this.rForm.value.password)
      .subscribe(
        data => {
          this.router.navigate(['/user/page']);
          console.log('done');
        },
        error => {
          console.log('error');
          this.loading = false;
        });
    console.log('here');

/*    this.firstName = this.rForm.value.firstName;
    this.gender = this.rForm.value.form_type;*/
  }

  public addPost(post) {

  }

  ngOnInit() {
  }

}


