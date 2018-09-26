import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../user/login.service";
import { TitleService } from "../../title.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  aboutOpened: boolean = false;
  inPortal:boolean = false;
  portalOnly:boolean = false;
  user:LoginService;
  title:TitleService;

  constructor(private router: Router, user: LoginService, title:TitleService) {
    this.user = user;
    this.title = title;
    this.router.events.subscribe(() => {
      const url = this.router.url;
      if (url.indexOf("about") > -1) {
        this.aboutOpened = true;
      } else {
        this.aboutOpened = false;
      }
      if (url.indexOf("user-portal") > -1) {
        this.inPortal = true;
      } else {
        this.inPortal = false;
      }
      if (url.indexOf("user-menu") > - 1 && !(url.indexOf("add-case") > -1)) {
        this.portalOnly = true;
      }
      else {
        this.portalOnly = false;
      }
     
    });
  }

  logOut() {
    this.user.logOut();
  }
  ngOnInit() {}
}
