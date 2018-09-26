import { Component, OnInit } from "@angular/core";
import { HemosService } from "../../shared-data-entry/hemos/hemos.service";
import { CrispCatSelectService } from "../../shared-data-entry/hemos/crisp-cat/crisp-cat-select.service";


@Component({
  selector: "app-hemo-modal",
  templateUrl: "./hemo-modal.component.html",
  styleUrls: ["./hemo-modal.component.scss"]
})
export class HemoModalComponent implements OnInit {

  svSat = {name: "Saturation", items:[ "≥ 80%", "70-80%", "< 70%"]};
  svMeanPAp = {name:"Mean PAp", items:["Normal",'', "*Severely Elevated"]};
  svVentricularFunction = {name: "Ventricular Function", items: ['','', "Moderate/Severe Dysfunction"]}
  svAVVR = {name:"AVVR", items:["None or Mild", "Moderate", "Severe"]};
  svDesc = "*Severely elevated mPAp: anticipated mPAp >20 mmHg";

 
  biSat = {name: "Saturation", items:[  "≥ 95%", "85-95%", "< 85%",]};
  biRVp = {name: "RVp", items:[ "< ½ systemic",  "½ systemic", "> systemic"]};
  biAnticipatedPVR = {name:"*Anticipated PVR", items:["Normal","Moderately Elevated", "Severely Elevated"]};
  biVentricularFunction = {name: "Ventricular Function", items: ['','', "Moderate/Severe Dysfunction"]}
  biAVVR = {name:"Systemic AVVR", items:["None or Mild", "Moderate", "Severe"]};
  biDesc= "*Anticipated PVR reference: normal being PVR <4 iWU, moderately elevated 4-8 iWU, and severely elevated >8 iWU";
  
 
  bi = [this.biSat, this.biRVp, this.biAnticipatedPVR, this.biVentricularFunction, this.biAVVR];
  sv = [this.svSat, this.svMeanPAp, this.svVentricularFunction, this.svAVVR];
  toUse;
  desc; 
  public hemos: HemosService;
  public cat: CrispCatSelectService;
  constructor(hemos: HemosService, cat: CrispCatSelectService) {
    this.hemos = hemos;
    this.setValues();
    this.hemos.svChange.subscribe(value => {
      this.setValues();
    });
    this.cat = cat;
  }

  getRadioName(val) {
    return "crisp-cat2-" + val;
  }

  setValues() {
    if (this.hemos.sv) {
      this.toUse = this.sv;
      this.desc = this.svDesc;
    }
    else {
      this.toUse = this.bi;
      this.desc = this.biDesc;
    }
  }


  ngOnInit() {}
}
