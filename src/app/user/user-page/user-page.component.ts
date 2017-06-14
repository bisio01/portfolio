import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { fadeInAnimation } from '../../animations/animations';

@Component({
  selector: 'app-user-page',
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class UserPageComponent implements OnInit {

  public user;

  public userLocal;


  constructor(public userService: UserService) {
    this.user = this.userService.getData();

    this.userLocal = JSON.parse(localStorage.getItem('user'));

  }



  ngOnInit() {
  }

}
