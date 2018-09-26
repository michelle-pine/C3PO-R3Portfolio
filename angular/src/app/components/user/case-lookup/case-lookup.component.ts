import { Component, OnInit, HostListener } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, pipe } from "rxjs";
import { map, takeUntil, tap } from "rxjs/operators";

import { LoginService } from "../login.service";

@Component({
  selector: "app-case-lookup",
  templateUrl: "./case-lookup.component.html",
  styleUrls: ["./case-lookup.component.scss"]
})
export class CaseLookupComponent implements OnInit {
  public ageOptions = [];

  CaseId: number;
  HospitalId: number;
  CompleteDataOnly: boolean = false;
  IncompleteDataOnly: boolean = false;
  CathDateFrom: string = "";
  CathDateTo: string = "";
  AgeRange: string = "";
  ShowInactiveCases: boolean = true;
  errorMessage: string = "";

  filter: string = "";
  key: string = "CaseId";
  reverse: boolean = false;
  public cases = [
    {
      number: 99999999,
      date: "9/9/9999",
      age: "9 years",
      type: "type 9",
      status: "Incomplete"
    },
    {
      number: 88888888,
      date: "8/8/8888",
      age: "8 years",
      type: "type 8",
      status: "Complete"
    },
    {
      number: 77777777,
      date: "7/7/7777",
      age: "7 years",
      type: "type 7",
      status: "Incomplete"
    },
    {
      number: 66666666,
      date: "6/6/6666",
      age: "6 years",
      type: "type 6",
      status: "Complete"
    },
    {
      number: 55555555,
      date: "5/5/5555",
      age: "5 years",
      type: "type 5",
      status: "Incomplete"
    },
    {
      number: 44444444,
      date: "4/4/4444",
      age: "4 years",
      type: "type 4",
      status: "Complete"
    },
    {
      number: 33333333,
      date: "3/3/3333",
      age: "3 years",
      type: "type 3",
      status: "Incomplete"
    },
    {
      number: 22222222,
      date: "2/2/2222",
      age: "2 years",
      type: "type 2",
      status: "Complete"
    },
    {
      number: 11111111,
      date: "1/1/1111",
      age: "1 years",
      type: "type 1",
      status: "Incomplete"
    }
  ];

  public user: LoginService;
  constructor(_user: LoginService) {}

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit() {}
}
