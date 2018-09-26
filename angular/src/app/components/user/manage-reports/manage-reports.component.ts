import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import { CaseLookupComponent } from "../case-lookup/case-lookup.component";

import { AdverseEventsReportService } from "./report-services/adverse-events-report.service";
import { CaseTypeService } from "./report-services/case-type.service";
import { CharacteristicsService } from "./report-services/characteristics.service";
import { DateRangeService } from "./report-services/date-range.service";
import { HemoVariablesService } from "./report-services/hemo-variables.service";
import { RadiationService } from "./report-services/radiation.service";
import { RiskAdjustmentService } from "./report-services/risk-adjustment.service";
import { RiskTypeService } from "./report-services/risk-type.service";
import { ColorServiceService } from "./report-services/color-service.service";
import { BaseChartDirective } from "ng2-charts";
import { enterAnimation } from "../../../animations/enter.animation";


@Component({
  selector: "app-manage-reports",
  templateUrl: "./manage-reports.component.html",
  styleUrls: ["./manage-reports.component.scss"],
  host: { '[@enterAnimation]': '' },
  animations:[enterAnimation]
})
export class ManageReportsComponent implements OnInit {
  @ViewChildren(BaseChartDirective) charts: any;

  reportTypes = [
    "Date Range",
    "Clinical Characteristics",
    "Hemodynamic Variables",
    "Case Type",
    "Risk Type Category",
    "Adverse Events",
    "Risk Adjustment",
    "Radiation"
  ];

  caseTypes = ["Type 1", "Type 2", "Type 3"];
  caseTypeSelect = [];

  ageOptions;

  currentValue = "Date Range";
  riskTypes = [
    "REC 1",
    "REC 2",
    "REC 3",
    "CHARM 1",
    "CHARM 2",
    "CHARM 3",
    "CHARM 4",
    "CRISP 1",
    "CRISP 2",
    "CRISP 3",
    "IMPACT 1",
    "IMPACT 2",
    "IMPACT 3",
    "IMPACT 4",
    "IMPACT 5",
    "IMPACT 6"
  ];

  events = [
    "Any",
    "Major Adverse Event",
    "Severity 3",
    "Severity 4",
    "Severity 5"
  ];
  selectedEvents = [];
  radiationCat = [1, 2, 3, "NC"];
  selectedRadiationCat = [];
  report = false;
  adverseEvents: AdverseEventsReportService;
  caseType: CaseTypeService;
  characteristics: CharacteristicsService;
  dateRange: DateRangeService;
  hemoVariables: HemoVariablesService;
  radiation: RadiationService;
  riskAdjustment: RiskAdjustmentService;
  riskType: RiskTypeService;
  colorService: ColorServiceService;

  constructor(
    adverseEvents: AdverseEventsReportService,
    caseType: CaseTypeService,
    characteristics: CharacteristicsService,
    dateRange: DateRangeService,
    hemoVariables: HemoVariablesService,
    radiation: RadiationService,
    riskAdjustment: RiskAdjustmentService,
    riskType: RiskTypeService,
    colorService: ColorServiceService
  ) {
    //this.ageOptions = new CaseLookupComponent(lookup);
    this.adverseEvents = adverseEvents;
    this.caseType = caseType;
    this.characteristics = characteristics;
    this.dateRange = dateRange;
    this.hemoVariables = hemoVariables;
    this.radiation = radiation;
    this.riskAdjustment = riskAdjustment;
    this.riskType = riskType;
    this.colorService = colorService;
  }
  ngOnInit() {
    this.changeLegend();
  }

  selectAll(place, toplace) {
    this[place] = this[toplace];
  }
  unselectAll(place) {
    this[place] = [];
  }

  generate() { 
    this.report = true;
  }

  onResize(event) {
    this.changeLegend();
  }

  reload() {
    this.report = false;
  }

  changeLegend() {
  
    if (window.innerWidth < 768) {
      this.dateRange.changeLegend("bottom");
      this.characteristics.changeLegend("bottom");
    } else {
      this.dateRange.changeLegend("right");
      this.characteristics.changeLegend("bottom");
    }
    if (this.charts) {
      for (let chart of this.charts._results) {
        chart.ngOnChanges({});
      }
    }
  }
}
