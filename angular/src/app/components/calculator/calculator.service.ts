import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  //use this service to store the data from the calculator/make calculations
  public stsValues:number[] = [1,2,3];
  public stsSelection:number = 1;

  constructor() { }
  getSTSId(val) {
    return "sts-" + val;
  }

}
