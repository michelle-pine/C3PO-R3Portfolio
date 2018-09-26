import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3po-charm',
  templateUrl: './c3po-charm.component.html',
  styleUrls: ['./c3po-charm.component.scss'],
  host: { 'class': "host" }
})
export class C3poCharmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
