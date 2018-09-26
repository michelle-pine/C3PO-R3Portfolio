import { Component, OnInit } from "@angular/core";
import { CaseTypeTreeModel } from "../../shared-data-entry/case-types-entry/case-type-tree-model";


import { CaseTypesEntryService } from "../../shared-data-entry/case-types-entry/case-types-entry.service";
import { CaseFieldsService } from "../../user/add-case/case-fields.service";

@Component({
  selector: "app-sts-tree",
  templateUrl: "./sts-tree.component.html",
  styleUrls: ["./sts-tree.component.scss"]
})
export class StsTreeComponent implements OnInit {
  data = [
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

  selected = "";

  func:CaseTypeTreeModel;
  fields: CaseFieldsService;

  constructor(fields:CaseFieldsService, service:CaseTypesEntryService) {
    this.fields = fields;
   
  }

  onSelect(event, tree) {
    if (event.node.isLeaf) {
      this.selected = event.node.data;
      this.fields.getField('Clinical Characteristics', 'STS').text =  CaseTypeTreeModel.getKeyString(event.node, tree);
      this.fields.getField('Clinical Characteristics', 'STS').value = event.node;
    }
    else {
      event.node.toggleExpanded();
      event.node.setIsActive(false);;
    }
 
  }
  ngOnInit() {}
}
