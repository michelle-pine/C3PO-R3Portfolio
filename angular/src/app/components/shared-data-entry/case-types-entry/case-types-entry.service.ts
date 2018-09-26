import { Injectable } from "@angular/core";
import { CaseTypeTreeModel } from "./case-type-tree-model";
import { Observable, Subject } from "rxjs";
import { CaseFieldsService } from "../../user/add-case/case-fields.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CaseTypesEntryService {
  //use this service to store/get data from the case types form
  inputVal; 
  model: CaseTypeTreeModel;

  myBool$: Observable<boolean>;

  private boolSubject: Subject<boolean>;
  canChange = false;
  public router:Router;
  public fields:CaseFieldsService;
  constructor(fields:CaseFieldsService) {
      this.boolSubject = new Subject<boolean>();
      this.myBool$ = this.boolSubject.asObservable();

      this.fields = fields;
  }

  setChange(bool) {
    if (this.inputVal !== '') {
      this.canChange = bool
      this.boolSubject.next(bool);
    }

  }

  


 
}
