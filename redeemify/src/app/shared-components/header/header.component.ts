import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "header-page",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Input()
  logo: string = "";

  @Input()
  showPoweredBy: boolean = false;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigateByUrl("/home");
  }
  
}