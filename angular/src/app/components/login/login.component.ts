import { Component, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoginService } from "../user/login.service";
import { Router } from "@angular/router";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, pipe } from "rxjs";
import { map, takeUntil, tap } from "rxjs/operators";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    
  }
}
