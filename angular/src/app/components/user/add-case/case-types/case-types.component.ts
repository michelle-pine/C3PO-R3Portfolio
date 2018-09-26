import { Component, OnInit } from "@angular/core";
import { CaseFieldsService } from "../case-fields.service";

@Component({
  selector: "app-case-types",
  templateUrl: "./case-types.component.html",
  styleUrls: ["./case-types.component.scss"],
  host: { class: "host" }
})
export class CaseTypesComponent implements OnInit {
  fields:CaseFieldsService;
  name = "Case Types";

  constructor(fields:CaseFieldsService) {
    this.fields = fields;
  }

  toggleHideSecondTree(bool) {
    this.fields.getParent('Pre-Case Calculation')['hide'] = bool;
  }

  getHide() {
    return this.fields.getParent('Pre-Case Calculation')['hide'];
  }

  showSecondTree() {
    return !this.fields.getParent('Pre-Case Calculation')['hide'] 
    && this.getCaseTypeDone() 
    && this.fields.getField(this.name, 'Case Type').value;
  }

  getCaseTypeDone() {
    return this.fields.getValue(this.name, 'Case Type Done');


  }
  

  ngOnInit() {

  }
}
