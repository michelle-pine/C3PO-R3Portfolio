import { Component, OnInit } from "@angular/core";
import { fadeAnimation } from "../../../animations/fade.animation";
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterEvent
} from "@angular/router";

import { filter, map, mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { RouterHelper } from "../../../router-helper";
import { CaseFieldsService } from "./case-fields.service";

@Component({
  selector: "app-add-case",
  templateUrl: "./add-case.component.html",
  styleUrls: ["./add-case.component.scss"],
  animations: [fadeAnimation]
})
export class AddCaseComponent implements OnInit {
  nextRoute;
  prevRoute;
  fields;
  routerHelper: RouterHelper;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, fields:CaseFieldsService) {
    this.routerHelper = new RouterHelper(router, activatedRoute);
    this.routerHelper
      .getRouteData(this.router.events)
      .pipe(
        map(data => {
          if (data["next"]) {
            return data["next"];
          }
        })
      )
      .subscribe(pathString => {
        this.nextRoute = pathString;
      });
      this.routerHelper
      .getRouteData(this.router.events)
      .pipe(
        map(data => {
          if (data["prev"]) {
            return data["prev"];
          }
        })
      )
      .subscribe(pathString => {
        this.prevRoute = pathString;
      });
      this.fields = fields;
  }
  ngOnInit() {}
}
