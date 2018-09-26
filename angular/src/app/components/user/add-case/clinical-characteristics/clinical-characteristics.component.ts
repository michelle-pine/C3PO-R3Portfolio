import { Component, OnInit } from "@angular/core";
import { CaseFieldsService } from "../case-fields.service";

@Component({
  selector: "app-clinical-characteristics",
  templateUrl: "./clinical-characteristics.component.html",
  styleUrls: ["./clinical-characteristics.component.scss"],
  host: { class: "host" }
})
export class ClinicalCharacteristicsComponent implements OnInit {
  problems = [
    "Cogulation Disorder",
    "Chronic Lung Disease",
    "Renal Insufficiency",
    "Other Non-Cardiac Problem",
    "Other"
  ];
  showSelect = false;
  selectedProblems = [];
  name = "Clinical Characteristics";
  weight;
  height;
  public fields;
  constructor(fields: CaseFieldsService) {
    this.fields = fields;
  }

  ngOnInit() {}

  calcBSA() {
    this.weight = this.fields.getValue(this.name, "Weight");
    this.height = this.fields.getValue(this.name, "Height");
    if (this.weight && this.height) {
      this.fields.getField(
        this.name,
        "BSA"
      ).value = ClinicalCharacteristicsComponent.round(
        Math.sqrt((this.height * this.weight) / 3600),
        3
      );
    }
  }

  toggleCardiacProblems(val) {
    this.fields.getField(this.name, 'Non-cardiac Problems').hide = val;
  }

  getCardiacProblems() {
    return this.fields.getField(this.name, 'Non-cardiac Problems').hide;
  }

  static round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }
}
