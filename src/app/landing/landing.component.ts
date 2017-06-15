import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../auth/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  titleAlert:string = 'This field is required';

  loading = false;

  email:string = '';
  password:string = '';

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

  }

  public addPost(post) {

  }



  ngOnInit() {
  }

}
