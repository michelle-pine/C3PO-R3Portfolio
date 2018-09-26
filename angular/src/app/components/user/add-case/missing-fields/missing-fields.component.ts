import { Component, OnInit } from '@angular/core';
import { CaseFieldsService } from '../case-fields.service';

@Component({
  selector: 'app-missing-fields',
  templateUrl: './missing-fields.component.html',
  styleUrls: ['./missing-fields.component.scss'],
  host: { class: "host" }
})
export class MissingFieldsComponent implements OnInit {
  public fields;
  constructor(fields:CaseFieldsService) { 
    this.fields = fields;
  }

  ngOnInit() {
  }

}
