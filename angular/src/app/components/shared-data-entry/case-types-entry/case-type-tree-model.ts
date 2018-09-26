import { CaseTypesEntryService } from "./case-types-entry.service";
import { Router } from "@angular/router";
import { CaseFieldsService } from "../../user/add-case/case-fields.service";

export class CaseTypeTreeModel {

  
  procedures = [
    {
      id: 1,
      name: "Balloon Angioplasty",
      children: [
        {
          id: 2,
          name: "Proximal RPA",
          children: [
            {
              id: 3,
              name: "Dilation ≤ 8 ATM"
            },
            {
              id: 4,
              name: "Dilation > 8 ATM"
            },
            {
              id: 5,
              name: "Cutting Balloon"
            }
          ]
        },
        {
          id: 6,
          name: "Proximal LPA",
          children: [
            {
              id: 7,
              name: "Dilation ≤ 8 ATM"
            },
            {
              id: 8,
              name: "Dilation > 8 ATM"
            },
            {
              id: 9,
              name: "Cutting Balloon"
            }
          ]
        }
      ]
    },
    {
      id: 10,
      name: "Valvotomy",
      children: [
        {
          id: 11,
          name: "Mitral Valvotomy"
        },
        {
          id: 12,
          name: "Pulmonary Valvotomy"
        },
        {
          id: 13,
          name: "Aortic Valvotomy"
        },
        {
          id: 14,
          name: "Tricuspid Valvotomy"
        }
      ]
    }
  ];

  diagnosticOnly: boolean = false;
  toAddNode;
  toAddTree;
  primarySelected: boolean = false;
  currentPrimary = "";
  name = "Case Types";
  public options = {
    animateExpand: true,
    animateAcceleration: 1.2,
    scrollOnActivate: true,
    animateSpeed: 10
  };
  public fields: CaseFieldsService;
  service: CaseTypesEntryService;
  constructor(service: CaseTypesEntryService) {
    this.service = service;
    service.myBool$.subscribe((val: boolean) => {
      this.addWithDetails();
    });
  }

  //produces the selected key string for a particular procedure
  static getKeyString(node, tree) {
    //all procedure names are parsed as
    let text = "";
    if (node && node.path) {
      let path = node.path;
      for (let id of path) {
        let parent = tree.treeModel.getNodeById(id);
        if (text !== "") {
          text = text + " | " + parent.data.name;
        } else {
          text = text + parent.data.name;
        }
      }
    }
    return text;
  }

  //when selecting a leaf, creates a new procedure entry
  //otherwise, opens parent
  onSelect(event, tree) {
    this.switchCaseTypeDone(false);
    this.service.inputVal = "";
    let procs = this.getProcedures();
    if (event.node.isLeaf && !this.diagnosticOnly) {
      if (event.node.data.code === "1101") {
        //Diagnostic Only selected, will be only selection
        this.setProcedures(null);
        this.primarySelected = false;
        this.createRecord(event.node, tree);
        this.diagnosticOnly = true;
      } else if (event.node.data.needsDetails) {
        //if extra details are necessary, opens modal to collect them
        document.getElementById("openModalButton").click();
        this.toAddNode = event.node;
        this.toAddTree = tree;
      } else {
        //creates normal entry
        if (!procs) {
          this.setProcedures({});
        }
        this.createRecord(event.node, tree);
      }
    } else {
      //opens parent node
      event.node.toggleExpanded();
    }
  }

  //creates a recorded procedure
  createRecord(node, tree) {
    let procs = this.getProcedures();
    if (!this.diagnosticOnly) {
      let nodeString = CaseTypeTreeModel.getKeyString(node, tree);
      let details =
        this.service.inputVal !== "" ? " | " + this.service.inputVal : "";
      let primary = false;
      if (!this.primarySelected) {
        primary = true;
        this.primarySelected = true;
        this.currentPrimary = nodeString;
      }
      procs[nodeString + details] = {
        primary: primary,
        id: "procedure-" + node.data.code,
        details: details
      };
    }
  }

  //creates a procedure with extra details
  addWithDetails() {
    if (this.service.canChange) {
      this.createRecord(this.toAddNode, this.toAddTree);
      document.getElementById("procedure-close").click();
    } else {
      this.toAddNode = null;
      this.toAddTree = null;
    }
    this.service.inputVal = "";
  }

  //sets a new primary procedure
  newPrimary(event, name) {
    let procs = this.getProcedures();
    this.switchCaseTypeDone(false);
    procs[this.currentPrimary]["primary"] = false;
    this.primarySelected = true;
    this.currentPrimary = name;
    procs[name]["primary"] = true;
  }

  //deletes a procedure from the procedure list
  deleteProcedure(event, val) {
    let procedures = this.getProcedures();
    let item = procedures[val];
    delete procedures[val];
    console.log(procedures);
    this.switchCaseTypeDone(false);
    let arr = this.getProceduresArray();
    if (arr.length > 0) {
      let noPrimary = item.primary;
      if (noPrimary || arr.length == 1) {
        this.currentPrimary = arr[0];
        procedures[arr[0]]["primary"] = true;
      }
    } else {
      this.diagnosticOnly = false;
      this.currentPrimary = "";
      this.setProcedures(null);
      this.primarySelected = false;
      this.switchCaseTypeDone(false);
    }
  }

  //retrieves the recorded procedure list from the case list service
  getProcedures() {
    return this.service.fields.getField(this.name, "Recorded Procedures").value;
  }

  //sets the recorded procedures
  setProcedures(val) {
    this.service.fields.getField(this.name, "Recorded Procedures").value = val;
  }

  //gets the recorded procedures as an array
  getProceduresArray() {
    var proc = this.getProcedures();
    if (proc) {
      return Object.getOwnPropertyNames(this.getProcedures());
    } else {
      return [];
    }
  }

  //makes the case type visible or invisible, depending on parameter
  switchCaseTypeDone(bool) {
    this.service.fields.getField(this.name, "Case Type Done").value = bool;
    if (this.name !== 'Pre-Case Calculation') {
      this.service.fields.getParent("Pre-Case Calculation")["hide"] = true;
    }
    

    if (!bool) {
      this.service.fields.getField(this.name, "Case Type").value = null;
    }
  }

  //retrieves whether case type has been generated
  getCaseTypeDone() {
    return this.service.fields.getValue(this.name, "Case Type Done");
  }
}
