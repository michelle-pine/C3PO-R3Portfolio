import { Component, OnInit } from '@angular/core';
import { CrispCatSelectService } from './crisp-cat-select.service';

@Component({
  selector: 'app-crisp-cat',
  templateUrl: './crisp-cat.component.html'
})
export class CrispCatComponent implements OnInit {
  public cat:CrispCatSelectService;
  constructor(cat:CrispCatSelectService) {
    this.cat = cat;
   }



  ngOnInit() {

  }

}
