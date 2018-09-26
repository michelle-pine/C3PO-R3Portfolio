import { Component, OnInit } from "@angular/core";
import { CaseFieldsService } from "../case-fields.service";

@Component({
  selector: "app-procedure-characteristics",
  templateUrl: "./procedure-characteristics.component.html",
  styleUrls: ["./procedure-characteristics.component.scss"],
  host: { class: "host" }
})
export class ProcedureCharacteristicsComponent implements OnInit {
  public inTime = null;
  public outTime = null;
  public duration;
  fields:CaseFieldsService;
  name = "Procedure Characteristics";

  constructor(fields:CaseFieldsService) {
    this.fields = fields;
  }

  changeTime(event, picker) {
    return picker._selected;
  }

  setInTime(picker) {
    this.fields.getField(this.name, "Sheath-in Time").value = picker._selected;
    this.inTime = picker._selected;
  
  }

  setOutTime(picker) {
    this.fields.getField(this.name, "Sheath-out Time").value = picker._selected;
    this.outTime = picker._selected;
  }

  setDuration(picker, input) {
    var format = function(val) {
      return (val < 10) ? "0" + val : val;
    }
    var timeFormat = function(hr, min) {
      return hr + ':' + min;
    }
    if (this.inTime !== null && this.outTime !== null) {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      let val1 = this.outTime.getTime() - today.getTime();
      let val2 = this.inTime.getTime() - today.getTime();
      let time = 0; 
      if (val1 > val2) {
         time = Math.abs(val1 - val2);
      }
      else {
        time = (val2 - val1)*24*60;
      }

      let minutes = Math.floor((time / (1000 * 60)) % 60);
      let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      let hourStr = format(hours);
      let minuteStr = format(minutes)
      this.duration = timeFormat(hourStr, minuteStr);
    }
    let val = picker._selected; 
    input.value = timeFormat(format(val.getHours()), format(val.getMinutes()));
    this.fields.getField(this.name, "Duration").value = this.duration;
  }
  ngOnInit() {}
}
