import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { CaseFieldsService } from '../../user/add-case/case-fields.service';

@Component({
  selector: 'app-calc-characteristics',
  templateUrl: './calc-characteristics.component.html',
  styleUrls: ['./calc-characteristics.component.scss']
})
export class CalcCharacteristicsComponent implements OnInit {
  public calc:CalculatorService
  fields:CaseFieldsService;
  constructor(calc:CalculatorService, fields:CaseFieldsService) {
    this.calc = calc;
    this.fields = fields;
   }

 
   

  ngOnInit() {
  }

}
