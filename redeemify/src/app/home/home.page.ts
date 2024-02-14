import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { RouteUtils } from '../utils/route.utils';
import { Router } from '@angular/router';
import { UserContext } from '../shared-components/services/user-context.service';
import { RolesRestrictorService } from '../services/roles-restrictor.service';
import { ProductService } from '../shared-components/services/products.services';
import { SearchParamModel } from '../shared-components/models/search-params.model';
import { FormGroup } from '@angular/forms';
import { AddressHomeComponent } from '../address/home/address-home.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  routeUtils = RouteUtils;

  productsData: Array<any> = [];



  constructor(
    public router: Router,
    public rolesRestrictor: RolesRestrictorService,
  ) {
  }

  ngOnInit() {
    if(this.rolesRestrictor.onlyDealerDistributor) {
      this.routeUtils.goToActiveProductsPage(this.router);
    }
  }

  

}
