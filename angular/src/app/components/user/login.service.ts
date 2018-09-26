import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';


@Injectable()
export class LoginService {
  private http: Http = null;

  public loggedIn: boolean = false;


  constructor(_http: Http) {
    this.http = _http;
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
    localStorage.removeItem('currentUser');

  }





}
