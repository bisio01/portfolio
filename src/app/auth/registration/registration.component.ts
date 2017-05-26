import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  loading = false;
  email:string = '';
  password:string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }


  public regForm: FormGroup = new FormGroup({
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

  register() {
    this.loading = true;
    this.authenticationService.create(this.regForm.value.email, this.regForm.value.password)
      .subscribe(
        data => {
          console.log('login');
          this.router.navigate(['/login']);
        },
        error => {
          console.log('error');
          this.loading = false;
        });
  }


  ngOnInit() {
  }

}
