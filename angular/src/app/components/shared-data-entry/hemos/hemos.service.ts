import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HemosService {
  public sv: boolean = false;
  public svVals = {
    SVEDP: 18,
    SysSat: 78,
    MVSat: 50,
    PAMean: 17,
    QpQs: 1.5,
    PVR: 3
  };
  public biVals = {
    SVEDP: 18,
    SysSat: 95,
    MVSat: 60,
    PAMean: 45,
    QpQs: 1.5,
    PVR: 3
  };
  public vals = {
    SVEDP: 18,
    SysSat: 78,
    MVSat: 50,
    PAMean: 17,
    QpQs: 1.5,
    PVR: 3
  };
  //use this service to store/get data from the hemodynamics form
  paTxt = "sys";
  svChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.vals = this.biVals;
    this.svChange.subscribe(value => {
      this.sv = value;
    });
  }

  toggleSV(val) {
    this.svChange.next(val);
    if (val) {
      this.vals = this.svVals;
      this.paTxt = "mean";
    } else {
      this.vals = this.biVals;
      this.paTxt = "sys";
    }
  }
}
