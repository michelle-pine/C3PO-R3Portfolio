import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../../user/login.service";

import { CaseFieldsService } from "../case-fields.service";

@Component({
  selector: "app-indicators",
  templateUrl: "./indicators.component.html",
  styleUrls: ["./indicators.component.scss"],
  host: { class: "host" }
})
export class IndicatorsComponent implements OnInit {
  airwayManagement = [
    "Natural Airway",
    "Tracheostomy",
    "Airway Support",
    "ETT Intubation"
  ];
  selectedPreAirway = "Natural Airway";
  selectedDuringAirway = "ETT Intubation";
  selectedPostAirway = "Natural Airway";

  ventilation = [
    "Room Air",
    "Supplemental O2",
    "Positive-pressure Ventilation",
    "Oxygen-Nitric"
  ];
  selectedPreVentilation = ["Room Air"];
  selectedDuringVentilation = ["Room Air"];
  selectedPostVentilation = ["Room Air"];

  sedation = [
    "None",
    "Local",
    "IV – Intermittent",
    "IV – Continuous",
    "General Anesthesia"
  ];
  selectedPreSedation = "None";
  selectedDuringSedation = "General Anesthesia";
  selectedPostSedation = "None";

  lines = ["None", "CVL", "Arterial"];
  selectedPreLines = ["None"];
  selectedDuringLines = ["None"];
  selectedPostLines = ["None"];

  drains = ["None", "Pericardial", "Chest Tube", "Other Drain"];
  selectedPreDrains = ["None"];
  selectedDuringDrains = ["None"];
  selectedPostDrains = ["None"];

  mechanicalSupport = ["None", "Pacing", "ECMO", "Other Mechanical Support"];
  selectedPreMechanical = ["None"];
  selectedDuringMechanical = ["None"];
  selectedPostMechanical = ["None"];

  IVMedications = [
    "None",
    "Vasoactive – Supportive",
    "Vasoactive – Essential",
    "Antiarrhythmics",
    "PGE",
    "Other Continuous Medications"
  ];
  selectedPreIV = ["None"];
  selectedDuringIV = ["None"];
  selectedPostIV = ["None"];

  nursingAssignment1 = ["≤ 1:2", "1:3", "1:4"];
  selectedPreNursing1 = [];
  selectedPostNursing1 = [];

  nursingAssignment2 = ["≤ 1:2", "1:3", "1:4", "None (discharged)"];
  selectedPostNursing2 = [];
  disabled = ["Not Applicable"];
  selectedDisabled = ["Not Applicable"]

  name = "Indicators of Required Resources";
  types;

  public user: LoginService;

  public fields:CaseFieldsService;
  constructor(_user: LoginService, fields:CaseFieldsService) {
    this.user = _user;
    this.fields = fields; 
    

    this.types = [
      {
        name: "Airway Management",
        multiple: false,
        id: "airwayManagement",
        items: this.airwayManagement,
        selections: [
          this.selectedPreAirway,
          this.selectedDuringAirway,
          this.selectedPostAirway
        ]
      },
      {
        name: "Ventilation",
        multiple: true,
        items: this.ventilation,
        id: "ventilation",
        selections: [
          this.selectedPreVentilation,
          this.selectedDuringVentilation,
          this.selectedPostVentilation
        ]
      },
      {
        name: "Sedation",
        multiple: false,
        items: this.sedation,
        id: "sedation",
        selections: [
          this.selectedPreSedation,
          this.selectedDuringSedation,
          this.selectedPostSedation
        ]
      },
      {
        name: "Lines",
        multiple: true,
        items: this.lines,
        id: "lines",
        selections: [
          this.selectedPreLines,
          this.selectedDuringLines,
          this.selectedPostLines
        ]
      },
      {
        name: "Drains",
        multiple: true,
        items: this.drains,
        id: "drains",
        selections: [
          this.selectedPreDrains,
          this.selectedDuringDrains,
          this.selectedPostDrains
        ]
      },
      {
        name: "Mechanical Support",
        multiple: true,
        items: this.mechanicalSupport,
        id: "mechanicalSupport",
        selections: [
          this.selectedPreMechanical,
          this.selectedDuringMechanical,
          this.selectedPostMechanical
        ]
      },
      {
        name: "IV Medications",
        multiple: true,
        items: this.IVMedications,
        id: "IVMedications",
        selections: [
          this.selectedPreIV,
          this.selectedDuringIV,
          this.selectedPostIV
        ]
      },
      {
        name: "Nursing Assignment",
        multiple: false,
        items: this.nursingAssignment1,
        id: "nursing-assignment",
        selections: [
          this.selectedPreNursing1,
          this.selectedDisabled,
          this.selectedPostNursing1,
          this.selectedPostNursing2
        ]
      }
    ];
  }

  ngOnInit() {}

  checkNone(event, type, period) {
    var arr = type.selections[period].splice(0);
    const index = arr.indexOf("None");
    let hasNone = type.items.indexOf("None") > -1;
    if (arr.length === 0) {
      if (hasNone) {
        arr = ["None"];
      } else {
        arr = [type.items[0]];
      }
    }
    if (index === 0 && arr.length > 1) {
      arr.shift();
    }
    if (index == arr.length - 1) {
      arr = [arr[arr.length - 1]];
    }
    type.selections[period] = arr;
  }
}
