import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "login-page",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: NgForm | any;

  constructor(private router: Router, private loginService: LoginService) {}

  login(form: NgForm) {
    this.loginService.login(form.value).subscribe((data: any) => {
      console.log('res data - ', data);
      this.router.navigateByUrl("/home");
    })
    // console.log(form);
    // this.router.navigateByUrl("/home")
  }
}