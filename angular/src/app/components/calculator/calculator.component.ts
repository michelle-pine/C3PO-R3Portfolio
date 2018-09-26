import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { fadeAnimation } from '../../animations/fade.animation';

import { enterAnimation } from '../../animations/enter.animation';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  animations: [enterAnimation]
})
export class CalculatorComponent implements OnInit {
  showResults:boolean = false;
  btnText:string = "CALCULATE";

  public calc:CalculatorService
  constructor(calc:CalculatorService) { 
    this.calc = calc;
  }

  ngOnInit() {
  }

  changeView($event) {
    this.showResults = !this.showResults;
    if (this.showResults) {
      this.btnText = "BACK";
    }
    else {
      this.btnText = "CALCULATE";
    }
  }

}
