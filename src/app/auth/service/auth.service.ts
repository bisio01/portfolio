import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('http://localhost:3000/auth/login', { email: username, password: password })
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }


  create(username: string, password: string) {
    return this.http.post('http://localhost:3000/auth/sign-up', { email: username, password: password });
  }


}
