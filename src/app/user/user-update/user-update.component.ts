import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { UserService } from '../service/user.service';
import { Subscription, Observable } from 'rxjs';
import { SportListService } from '../../service/sport-list.service';
import { MdDialog } from '@angular/material';
import { ModalMultipleDialog } from '../../modal/modal-multiple/modal.component';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],

})
export class UserUpdateComponent implements OnInit, AfterViewInit {

  public birthdayDays: any = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'},
    {id: '8'},
    {id: '9'},
    {id: '10'},
  ];

  public birthdayMonths: any = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'},
    {id: '8'},
    {id: '9'},
    {id: '10'},
    {id: '11'},
    {id: '12'},
  ];

  public birthdayYears: any = [
    {id: '1992'},
    {id: '1993'},
    {id: '1994'},
    {id: '1995'},
    {id: '1996'},
    {id: '1997'},
    {id: '1998'},
    {id: '1999'},
    {id: '2000'},
    {id: '2001'},
    {id: '2002'},
    {id: '2003'},
  ];

  private linksArr: any;
  private _subscribers: Subscription[] = [];

  public user;

  public userLocal;

  public skills: any[] = [];

  constructor(public userService: UserService,
              public dialog: MdDialog,
              public sportListService: SportListService) {

    this.user = this.userService.getData();

    this.userLocal = JSON.parse(localStorage.getItem('user'));
    if (this.userLocal) {
      this.UserForm.patchValue(this.userLocal)
    }

    sportListService.getList().then((res: any[]) => {
      this.skills = res;
    });

  }

  firstName: string = '';
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
    birthdayDay: new FormControl(''),
    birthdayMonth: new FormControl(''),
    birthdayYear: new FormControl(''),
    sportSkill: new FormControl('', [])
  });

  public update() {
    let user = this.UserForm.value;
    this.userService.setData(user);
    localStorage.setItem('user', JSON.stringify(user));

  }

  public openDialog() {
    this.dialog.open(ModalMultipleDialog).afterClosed().subscribe(result => {

      this.UserForm.get('sportSkill').setValue(result);
    });
  }


  public getSkillInfoById(id) {
    return this.skills.filter(el => el.id == id)[0];
  }

  private formToggle() {
    this.linksArr = $('.form-group');
    let clickSource = Observable.fromEvent(this.linksArr, 'click');
    this._subscribers.push(clickSource.subscribe((e: Event) => {
      let $form = $(e.currentTarget);
      if (!($form.hasClass('focused'))) {
        this.linksArr.removeClass('focused');
        $form.addClass('focused');
      }
    }));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.formToggle();
  }

}
