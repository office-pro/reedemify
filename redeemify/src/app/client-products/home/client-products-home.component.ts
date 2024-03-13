import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouteUtils } from "src/app/utils/route.utils";

@Component({
  selector: 'client-products-home',
  templateUrl: './client-products-home.component.html',
  styleUrls: ['./client-products-home.component.scss']
})

export class ClientProductsHome {
  brandData: Array<any> = [];
  userData: Array<any> = [];
  roleData: Array<any> = [];
  productData: Array<any> = [];
  routerUtils = RouteUtils;

  constructor(public router: Router) {}
}