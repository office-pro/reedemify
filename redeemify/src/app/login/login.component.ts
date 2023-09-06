import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "login-page",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: NgForm | any;

  constructor(private router: Router) {}

  login(form: NgForm) {
    console.log(form);
    this.router.navigateByUrl("/home")
  }
}