import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../user/login.service";
import { Router } from "@angular/router";
import { enterAnimation } from "../../../animations/enter.animation";

@Component({
  selector: "app-login-card",
  templateUrl: "./login-card.component.html",
  styleUrls: ["./login-card.component.scss"],
  animations: [enterAnimation]
})
export class LoginCardComponent implements OnInit {
  userName: string = "";
  passWord: string = "";
  errorMessage: string = "";



  user: LoginService;
  constructor(user: LoginService, private router: Router) {
    this.user = user;

    this.userName = "";
    this.passWord = "";
    this.errorMessage = "";
  }

  ngOnInit() {}

  Login() {
    this.errorMessage = "";

    if (this.userName == "username" && this.passWord == "password") {
      this.router.navigate(["/user-portal"]);
    
    }
    else  {
      this.errorMessage = "Invalid username and/or password. Please try again."
      this.passWord = '';
    }
  }
}
