import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CaseFieldsService {
  validate = false;
  goodToSubmit = false;
  fields = [
    {
      name: "Case Identification",
      link: "/user-portal/add-case/case-id",
      fields: [
        {
          name: "Cath Date",
          value: null
        },
        {
          name: "Operator",
          value: null
        }
      ]
    },
    {
      name: "Clinical Characteristics",
      link: "/user-portal/add-case/clinical-characteristics",
      fields: [
        {
          name: "Age",
          value: null
        },
        {
          name: "Age Unit",
          value: "Days",
          hide: true
        },
        {
          name: "Sex",
          value: null
        },
        {
          name: "Weight",
          value: null
        },
        {
          name: "Height",
          value: null
        },
        {
          name: "BSA",
          value: null
        },
        {
          name: "STS",
          value: null,
          text: null
        },
        {
          name: "Genetic Syndrome",
          value: null,
          hide: true
        },
        {
          name: "Non-cardiac Problems",
          value: null,
          hide: true
        }
      ]
    },
    {
      name: "Procedure Characteristics",
      link: "/user-portal/add-case/procedure-characteristics",
      fields: [
        { name: "Total Fluoro Time", value: null },
        { name: "Total DAP", value: null },
        { name: "Sheath-in Time", value: null },
        { name: "Sheath-out Time", value: null },
        { name: "Duration", value: null }
      ]
    },
    {
      name:"Hemodynamics",
      hide:"true",
      fields: [
        {
          name: "Single Ventricle Physiology",
          value: "None"
        },
        {
          name: "Physiologic Category",
          value: 1,
        },
        {
          name: "SV EDP",
          value: null
        },
        {
          name: "Sys Sat",
          value: null
        },
        {
          name: "PA",
          value: null
        },
        {
          name: "Qp:Qs",
          value: null
        },
        {
          name: "PVR",
          value: null
        },

      ]

    },
    {
      name: "Case Types",
      link: "/user-portal/add-case/case-types",
      fields: [
        { name: "Recorded Procedures", value: null },
        { name: "Case Type", value: null },
        { name: "Case Type Done", value: null, hide: true }
      ]
    },
    {
      name: "Pre-Case Calculation",
      link: "/user-portal/add-case/case-types",
      hide: true,
      fields: [
        { name: "Recorded Procedures", value: null },
        { name: "Case Type", value: null },
        { name: "Case Type Done", value: null, hide: true }
      ]
    },
    {
      name: "Adverse Events",
      link: "/user-portal/add-case/adverse-events",
      hide: true,
      fields: [
        { name: "Recorded Events", value: null },
        { name: "Description", value: null }
      ]
    },
    {
      name: "Indicators of Required Resources",
      link: "/user-portal/add-case/indicators",
      fields: [
        { name: "Nursing Assignment Pre-Procedure", value: null },
        { name: "Nursing Assignment Post-Procedure Before 6hrs", value: null },
        { name: "Nursing Assignment Post-Procedure After 6hrs", value: null }
      ]
    },
    {
      name: "EOC Admit/Disposition",
      link: "/user-portal/add-case/eoc",
      fields: [{ name: "Post-Cath Location", value: null }]
    }
  ];

  //gets a particular field object based on its parent and name
  getField(parent, name) {
    let parentFields: any = this.fields.find(x => x.name == parent)["fields"];
    let field = parentFields.find(x => x["name"] == name);

    return field;
  }

  //retrieves the value of a field
  getValue(parent, name) {
    return this.getField(parent, name)["value"];
  }

  //gets a parent object
  getParent(parent) {
    return this.fields.find(x => x.name == parent);
  }

  //checks if a field has a value
  hasValue(parent, name) {
    if (this.validate) {
      return this.getValue(parent, name) === null;
    } else {
      return false;
    }
  }

  setValue(parent, name, val) {
    this.getField(parent, name).value = val;
   }

  //returns the ngStyle object required to indicate form errors
  errorObject(parent, name) {
    return { error: this.hasValue(parent, name) };
  }

  //hides a particular field from missing field screen
  setHide(name, bool) {
    this.fields.find(x => x.name == name)["hide"] = bool;
  }
  constructor() {}
}
