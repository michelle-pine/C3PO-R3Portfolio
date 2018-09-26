import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserManagementService {
  public users = [
    {
      id: 1,
      username: "sampleuser1",
      email: "example1@example.com",
      fullName: "Lorem Ipsum1",
      active: true,
      password: "sample",
      institution: "Sample Hospital1",
      role: "User"
    },
    {
      id: 2,
      username: "sampleuser2",
      email: "example2@example.com",
      fullName: "Lorem Ipsum2",
      active: false,
      password: "sample",
      institution: "Sample Hospital2",
      role: "User"
    },
    {
      id: 3,
      username: "sampleuser3",
      email: "example@example.com3",
      fullName: "Lorem Ipsum3",
      active: true,
      password: "sample",
      institution: "Sample Hospital3",
      role: "User"
    },
    {
      id: 4,
      username: "sampleuser4",
      email: "example4@example.com",
      fullName: "Lorem Ipsum4",
      active: true,
      password: "sample",
      institution: "Sample Hospital4",
      role: "User"
    },
    {
      id: 5,
      username: "sampleuser5",
      email: "example5@example.com",
      fullName: "Lorem Ipsum5",
      active: false,
      password: "sample",
      institution: "Sample Hospital5",
      role: "User"
    }
  ];

  public selectedUser;
  public editableUser = {};
  public indexSelected = -1;

  constructor() {}

  setUser(user, i) {
    this.selectedUser = user;
    this.set(this.editableUser, this.selectedUser);
    this.indexSelected = i;
  }

  set(user1, user2) {
    for (var att in user2) {
      user1[att] = user2[att];
    }
  }

  addUser() {
    var user = {
      id: 0,
      username: "",
      email: "",
      fullName: "",
      active: false,
      password: "",
      institution: "",
      role: "User"
    };
    this.setUser(user, -1);
  }

  save() {
    this.set(this.selectedUser, this.editableUser);
    if (this.users.indexOf(this.selectedUser) == -1) {
      this.users.push(this.selectedUser);
    }

  }

  removeUser() {
    if (this.indexSelected > -1) {
      this.users.splice(this.indexSelected, 1);
    }
  }
}
