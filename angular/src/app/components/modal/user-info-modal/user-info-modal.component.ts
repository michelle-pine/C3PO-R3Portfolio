import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserManagementService } from "../../user/manage-users/user-management.service";

@Component({
  selector: "app-user-info-modal",
  templateUrl: "./user-info-modal.component.html",
  styleUrls: ["./user-info-modal.component.scss"]
})
export class UserInfoModalComponent implements OnInit {
  @ViewChild('close') close:ElementRef;
  users;
 
  constructor(users: UserManagementService) {
    this.users = users;
 
  }

  closeModal() {
    this.close.nativeElement.click();
  }
  save() {
    this.users.save();
    this.closeModal();
  }

  ngOnInit() {}
}
