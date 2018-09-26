import { Component, OnInit, Input, HostListener } from "@angular/core";
import { UserManagementService } from "./user-management.service";


@Component({
  selector: "app-manage-users",
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.scss"]
})
export class ManageUsersComponent implements OnInit {
  users: UserManagementService;


  filter: string = "";
  key: string = 'username'; 
  reverse: boolean = false;
  sort(key){
   
      this.key = key;
      this.reverse = !this.reverse;
 
  }

  constructor(users: UserManagementService) {
    this.users = users;
  }

  ngOnInit() {}



}
