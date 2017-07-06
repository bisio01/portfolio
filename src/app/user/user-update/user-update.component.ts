import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { UserService } from '../service/user.service';
import { Subscription, Observable } from 'rxjs';
import { fadeInAnimation } from '../../animations/animations';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }

})
export class UserUpdateComponent implements OnInit, AfterViewInit {

  private linksArr: any;
  private _subscribers: Subscription[] = [];

  public user;

  public userLocal;


  constructor(public userService: UserService) {

    this.user = this.userService.getData();

    this.userLocal = JSON.parse(localStorage.getItem('user'));
    if(this.userLocal) {
      this.UserForm.patchValue(this.userLocal)
    }

  }

  ngOnInit() {
  }

  firstName: string = '';
  lastName: string = '';
  city: string = '';

  public UserForm: FormGroup = new FormGroup({
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
    country: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    city: new FormControl('', [
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

  private formToggle() {
    this.linksArr = $('.form-group');
    let clickSource = Observable.fromEvent(this.linksArr, 'click');
    this._subscribers.push(clickSource.subscribe((e: Event) => {
      let $form = $(e.currentTarget);
      if(!($form.hasClass('focused'))){
        this.linksArr.removeClass('focused');
        $form.addClass('focused');
      }
    }));
  }

  ngAfterViewInit() {
    this.formToggle();
  }

}
