import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RolesRestrictorService } from "src/app/services/roles-restrictor.service";
import { UserContext } from "src/app/shared-components/services/user-context.service";
import { RouteUtils } from "src/app/utils/route.utils";

@Component({
  selector:'home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})

export class HomeProductsComponent {

  productsData: any = {};

  brandId: number = 0;

  userId: number = 0;

  routeUtils = RouteUtils;

  constructor(public rolesRestrictor: RolesRestrictorService, public router: Router, private userContext: UserContext) {
    this.userContext.brand$.subscribe((data: any) => {
      this.brandId = data.brandId;
      this.userId = data.userId;
    })
  }
  
}