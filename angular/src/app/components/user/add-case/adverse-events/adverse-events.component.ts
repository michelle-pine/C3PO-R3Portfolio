import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { InfoModalServiceService } from "../../../modal/info-modal/info-modal-service.service";

import { CaseTypeTreeModel } from "../../../shared-data-entry/case-types-entry/case-type-tree-model";
import { CaseFieldsService } from "../case-fields.service";

@Component({
  selector: "app-adverse-events",
  templateUrl: "./adverse-events.component.html",
  styleUrls: ["./adverse-events.component.scss"],
  host: { class: "host" }
})
export class AdverseEventsComponent implements OnInit {
  @ViewChild("dropdown") seriousness: ElementRef;

  events = [
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

  majorEvents = [
    {
      name: "Cardiac arrest",
      description: "requiring cardiopulmonary resuscitation",
      id: 1
    },
    {
      name: "Arrhythmia requiring an antiarrhythmic medication",
      description: "",
      id: 2
    },
    { name: "Arrhythmia requiring cardioversion", description: "", id: 3 },
    {
      name: "Arrhythmia requiring temporary pacemaker",
      description: "",
      id: 4
    },
    {
      name: "Arrhythmia requiring permanent pacemaker",
      description: "",
      id: 6
    },
    {
      name: "New heart valve regurgitation",
      description:
        "Defined as new >3+ tricuspid valve regurgitation in a procedure distal to the tricuspid valve because of a wire or sheath, or new >3+ mitral valve regurgitation in an antegrade aortic procedure",
      id: 5
    },
    {
      name:
        "Air embolus resulting in clinical change (eg decrease in cardiac function)",
      description: "",
      id: 7
    },
    {
      name: "Embolic stroke",
      description: "<72 hours of the cardiac catheterization",
      id: 8
    },
    {
      name: "Device malposition or thrombus",
      description: "requiring surgery",
      id: 9
    },
    {
      name: "Device embolization",
      description: "requiring device retrieval",
      id: 10
    },
    { name: "New requirement for dialysis", description: "", id: 11 },
    { name: "Event requiring intubation", description: "", id: 12 },
    {
      name: "Event requiring extracorporeal membrane oxygenation (ECMO)",
      description: "",
      id: 13
    },
    {
      name: "Event requiring left ventricular assist device (LVAD)",
      description: "",
      id: 14
    },
    {
      name:
        "Significant bleeding event <72 hours of the cardiac catheterization",
      description:
        "defined as a bleed associated with a drop in hemoglobin of >3 g/dL, bleed requiring transfusion of whole blood or packed red blood cells, or bleed requiring an intervention or surgery at the bleeding site to reverse/stop or correct the bleeding",
      id: 15
    },
    {
      name: "Other vascular complications requiring treatment",
      description: "",
      id: 16
    },
    {
      name: "Unplanned cardiac, vascular, or other surgery ",
      description: "Because of catheterization complication.",
      id: 17
    },
    {
      name: "Subsequent cardiac catheterization",
      description: "Because of catheterization complication.",
      id: 18
    },
    { name: "Death before hospital discharge", description: "", id: 19 }
  ];

  name = "Adverse Events";
  selectedMajorAdverseEvent = [];

  toAdd: any = {};
  // recordedEvents = {};
  // recordedArray = [];
  showEvents: boolean = false;

  options = {
    animateExpand: true,
    animateAcceleration: 1.2,
    scrollOnActivate: true,
    animateSpeed: 10
  };

  public info: InfoModalServiceService;

  public fields: CaseFieldsService;
  constructor(info: InfoModalServiceService, fields: CaseFieldsService) {
    this.info = info;

    this.fields = fields;
  }

  getKeyString(node, tree) {
    return CaseTypeTreeModel.getKeyString(node, tree);
  }

  //places the event in selected adverse events
  onSave($event) {
    console.log(this.toAdd);
    if (!this.getEvents()) {
      this.setEvents({});
    }
    if (
      this.toAdd.id !== null &&
      this.toAdd.id > 0 &&
      this.toAdd.seriousness > 0
    ) {
      this.addItem(this.toAdd.name, {
        name: this.toAdd.name,
        id: this.toAdd.id,
        seriousness: this.toAdd.seriousness
      });
      console.log(this.fields.fields);
    }
    if (this.toAdd !== {}) {
      this.onClear($event);
    }
  }

  //places the selected event in the edit fields
  onSelect(event, tree) {
    if (event.node.isLeaf) {
      this.toAdd = {
        name: CaseTypeTreeModel.getKeyString(event.node, tree),
        id: event.node.data.id,
        seriousness: 0
      };
    }
    this.seriousness.nativeElement.value = "0";
    event.node.toggleExpanded();
  }

  //adds a major event to the selected adverse events
  addMajor(event) {
    this.toAdd = {
      name: event.name,
      id: event.id,
      seriousness: 0
    };
    this.seriousness.nativeElement.value = this.toAdd.seriousness;
    this.selectedMajorAdverseEvent = [];
  }

  //clears the selection in the major adverse events dropdown
  clearMajor(event) {
    this.selectedMajorAdverseEvent = [];
  }

  //clears the editable event fields
  onClear(event) {
    this.toAdd = {};
    this.seriousness.nativeElement.value = "";
  }

  //deletes a selected procedure
  deleteProcedure(event, name) {
    let savedEvents = this.getEvents();
    delete savedEvents[name];
    let arr = Object.getOwnPropertyNames(savedEvents);

    if (arr.length == 0) {
      savedEvents = null;
    }
  }

  toggleShowEvents(val) {
    this.showEvents = val;
    this.fields.getParent(this.name)["hide"] = !val;
  }

  //returns the seriousness value of a particular event
  getSeriousness(name) {
    let savedEvents = this.getEvents();
    if (savedEvents) {
      return savedEvents[name]["seriousness"];
    }
  }

  //places a selected event in the editable fields
  editProcedure($event, name) {
    this.toAdd = this.getEvents()[name];
    this.seriousness.nativeElement.value = this.toAdd.seriousness;
  }

  checkAdd() {
    return (
      (!this.toAdd.seriousness && this.toAdd.seriousness !== "") ||
      !this.toAdd.name
    );
  }

  addItem(name, item) {
    this.fields.getField(this.name, "Recorded Events").value[name + ""] = item;
  }

  getEvents() {
    return this.fields.getField(this.name, "Recorded Events").value;
  }

  setEvents(val) {
    this.fields.getField(this.name, "Recorded Events").value = val;
  }

  //gets the recorded procedures as an array
  getEventsArray() {
    var proc = this.getEvents();
    if (proc) {
      return Object.getOwnPropertyNames(this.getEvents());
    } else {
      return [];
    }
  }

  ngOnInit() {
    this.showEvents = !this.fields.getParent(this.name)["hide"];
  }
}
