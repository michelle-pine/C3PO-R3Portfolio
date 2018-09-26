import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  user:LoginService;
  constructor(user: LoginService) { 
    this.user = user; 
  }

  ngOnInit() {
    this.user.logIn();
  }

}
