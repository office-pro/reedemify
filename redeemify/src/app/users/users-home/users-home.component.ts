import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouteUtils } from "src/app/utils/route.utils";

@Component({
  selector: 'users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['users-home.component.scss']
})

export class UsersHomeComponent {

  brandData: Array<any> = [];
  userData: Array<any> = [];
  roleData: Array<any> = [];
  productData: Array<any> = [];
  routerUtils = RouteUtils;

  constructor(public router: Router) {}

}