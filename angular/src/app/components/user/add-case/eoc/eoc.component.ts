import { Component, OnInit } from '@angular/core';
import { CaseFieldsService } from '../case-fields.service';

@Component({
  selector: 'app-eoc',
  templateUrl: './eoc.component.html',
  styleUrls: ['./eoc.component.scss'],
  host: { 'class': "host" }
})
export class EocComponent implements OnInit {
  fields:CaseFieldsService;
  name = "EOC Admit/Disposition"
  constructor(fields:CaseFieldsService) { 
    this.fields = fields;
  }

  ngOnInit() {
  }

}
