import { Component, OnInit } from "@angular/core";
import { HemosService } from "./hemos.service";
import { CaseFieldsService } from "../../user/add-case/case-fields.service";

@Component({
  selector: "app-hemos",
  templateUrl: "./hemos.component.html",
  styleUrls: ["./hemos.component.scss"],
})
export class HemosComponent implements OnInit {
  public hemos:HemosService;
  public fields:CaseFieldsService
  constructor( hemos: HemosService, fields:CaseFieldsService) {
    this.hemos = hemos;
    this.fields = fields; 
  }

  ngOnInit() {}
}
