import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrispCatSelectService {
  selection:number = 1;
  values:number[] = [1, 2, 3];

  constructor() { }

  getRadioName(val) {
    return "crisp-cat-" + val;
  }

  changeSelection(val){
    this.selection = val;
  }
}
