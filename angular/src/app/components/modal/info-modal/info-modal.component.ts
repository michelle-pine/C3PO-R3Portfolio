import { Component, OnInit } from '@angular/core';
import { InfoModalServiceService } from './info-modal-service.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  public info:InfoModalServiceService;
  constructor(info:InfoModalServiceService) { 
    this.info = info;
  }

  ngOnInit() {
  }

}
