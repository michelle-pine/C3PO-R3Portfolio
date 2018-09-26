import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../user/login.service";


import { CaseFieldsService } from '../case-fields.service';

@Component({
  selector: 'app-case-id',
  templateUrl: './case-id.component.html',
  styleUrls: ['./case-id.component.scss'],
  host: { 'class': "host" }
})
export class CaseIdComponent implements OnInit {

  operators = [];
  hospitalText = "";
  name = "Case Identification";
  public user: LoginService;

  public fields:CaseFieldsService;
  constructor(_user: LoginService,  fields:CaseFieldsService) {
    this.user = _user;
    this.fields = fields;

    

  
  }



  ngOnInit() {
  }
}
