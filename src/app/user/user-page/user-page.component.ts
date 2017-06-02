import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public user;

  constructor(public userService: UserService) {
     this.user = this.userService.getData();
  }



  ngOnInit() {
  }

}
