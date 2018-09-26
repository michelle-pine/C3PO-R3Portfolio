import { Component } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from "../user/login.service";
import { Router } from "@angular/router";
import { Observable, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';


@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: LoginService;

  userName: string = '';
  passWord: string = '';
  errorMessage: string = '';

  constructor() {
 
  }

}
