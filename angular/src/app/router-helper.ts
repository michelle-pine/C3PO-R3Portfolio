import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterEvent
} from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";


//retrieves the data object associated with an active route
export class RouterHelper {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  getRouteData(routerEvents) { 
    return routerEvents
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      .pipe(filter(route => route["outlet"] === "primary"))
      .pipe(mergeMap(route => route["data"]));
  }
}
