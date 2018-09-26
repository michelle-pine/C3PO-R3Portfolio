import { Component, OnInit } from "@angular/core";
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterEvent
} from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { fadeAnimation } from "../../animations/fade.animation";
import { RouterHelper } from "../../router-helper";

@Component({
  selector: "app-background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
  animations: [fadeAnimation]
})
export class BackgroundComponent implements OnInit {
  nextRoute;
  prevRoute;
  routerHelper: RouterHelper;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
  }

  ngOnInit() {}
}
