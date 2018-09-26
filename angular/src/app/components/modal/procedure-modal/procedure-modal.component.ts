import { Component, OnInit } from '@angular/core';
import { CaseTypesEntryService } from '../../shared-data-entry/case-types-entry/case-types-entry.service';

@Component({
  selector: 'app-procedure-modal',
  templateUrl: './procedure-modal.component.html',
  styleUrls: ['./procedure-modal.component.scss']
})
export class ProcedureModalComponent implements OnInit {
  service:CaseTypesEntryService;
  constructor(service:CaseTypesEntryService) { 
    this.service = service; 
  }

  ngOnInit() {
  }

}
