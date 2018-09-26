import {
  Component,
  ViewEncapsulation,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { fadeAnimation } from "./animations/fade.animation";
import { TitleService } from "./title.service";
import { Router, NavigationEnd } from "@angular/router";
declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private titleService: TitleService, private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.appendFooter();
      }
    });
  }

  ngOnInit() {
    this.titleService.init();
  }

  appendFooter() {
    $(".footer").remove();
    $(".my-contain").append(
    );

  }
}
