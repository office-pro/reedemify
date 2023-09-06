import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "header-page",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  loginForm: NgForm | any;

  constructor() {}

  login(form: NgForm) {
     
  }
}