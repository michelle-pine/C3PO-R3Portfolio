import { Component, OnInit } from '@angular/core';
import { CaseFieldsService } from '../../user/add-case/case-fields.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {
  name = "Clinical Characteristics";
  ageType = "days";
  min = 1;
  max = 31;
  age;
  ageError = false; 

  public fields;
  constructor(  fields:CaseFieldsService) {

    this.fields = fields;
   }

  ngOnInit() {
    this.ageType =  this.fields.getField(this.name, 'Age Unit').value;
  }

  setMinMax() {
    this.fields.getField(this.name, 'Age Unit').value = this.ageType;
    if (this.ageType == "days") {
      this.max = 31;
    }
    else if (this.ageType == "months") {
      this.max = 12;
    }
    else if (this.ageType == "years") {

      this.max = 100;
    }
    if (this.age) {
      this.checkVal();
    }

  }

  checkVal() {
    this.age = this.fields.getField(this.name, 'Age').value;
    if (this.age > this.max || this.age < this.min) {
      this.fields.getField(this.name, 'Age').value = null;
      this.ageError = true;
    }
    else {
      this.ageError = false;
    }
  }

 

}
