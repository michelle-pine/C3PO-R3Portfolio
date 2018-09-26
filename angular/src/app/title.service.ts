import { Injectable } from '@angular/core';

import { filter, map, mergeMap } from 'rxjs/operators';


import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { RouterHelper } from './router-helper';

const APP_TITLE = 'C3PO-R3';
const SEPARATOR = ' > ';

@Injectable()
export class TitleService {
  public title:any = "";
  routerHelper:RouterHelper;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {
    this.routerHelper = new RouterHelper(router, activatedRoute);
  }

  init() {
    let val:any = '';
    this.routerHelper.getRouteData(this.router.events).pipe(
      map((data) => {
        if ( data["title"] ) {
          return data["title"];
        } else {
          return this.router.url.split('/').reduce((acc, frag) => {
            if ( acc && frag ) { acc += SEPARATOR; }
            return acc + TitleService.ucFirst(frag);
          });
        }
      }))
      .subscribe((pathString) => { 
        this.titleService.setTitle(`${APP_TITLE} ${pathString}`); 
      this.setTitle(pathString) });
  }

  static ucFirst(string) {
    if ( !string ) { return string; }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  setTitle(string) {
    this.title = string;
  }
}