import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  private _userData;

  public setData(data: {}) {
    this._userData = data;

  }

  public getData() {
    return this._userData
  }


}
