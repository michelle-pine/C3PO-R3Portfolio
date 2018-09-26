import { Component, OnInit, Input } from "@angular/core";
import { CaseTypesEntryService } from "./case-types-entry.service";
import { CaseTypeTreeModel } from "./case-type-tree-model";
import { Observable, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';


import { Router } from "@angular/router";

@Component({
  selector: "app-case-types-entry",
  templateUrl: "./case-types-entry.component.html",
  styleUrls: ["./case-types-entry.component.scss"]
})
export class CaseTypesEntryComponent implements OnInit {

  @Input() pre:boolean;
  treeModel: CaseTypeTreeModel;


  constructor(private service:CaseTypesEntryService) {
    this.treeModel = new CaseTypeTreeModel(service);

   
  }



  generateCaseType() {
    this.treeModel.switchCaseTypeDone(true);
    let primary: string = "";
    let secondary: string = "";
    let procsArr = this.treeModel.getProceduresArray();
    let procs = this.treeModel.getProcedures();
    for (let item of procsArr) {
      let proc = procs[item];
      let proc_id = proc['id'];
      proc_id = proc_id.replace("procedure-", "");

      if (proc['primary']) {
        primary = proc_id;
      } else {
        secondary = secondary + proc_id + ",";
      }
    }

    if (secondary.length > 0) {
      secondary = secondary.slice(0, -1);
    }
    this.service.fields.getField(this.treeModel.name, "Case Type").value = "Biopsy";
   
  }

 

 
  search(filter, tree) {
    console.log(tree);
    return tree.treeModel.filterNodes(filter.value);
  }

  ngOnInit() {     
    if (this.pre) {
      this.treeModel.name = "Pre-Case Calculation";
    }
    else { 
      this.treeModel.name = "Case Types";
    }
  }
}
