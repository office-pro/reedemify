import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "header-page",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  loginForm: NgForm | any;

  constructor(private router: Router) {}

  login(form: NgForm) {
     
  }

  navigateToHome() {
    this.router.navigateByUrl("/home");
  }
  
}