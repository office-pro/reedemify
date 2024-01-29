import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { UserService } from '../services/user.service';
import { RouteUtils } from '../utils/route.utils';
import { Router } from '@angular/router';
import { UserContext } from '../shared-components/services/user-context.service';
import { RolesRestrictorService } from '../services/roles-restrictor.service';
import { ProductService } from '../shared-components/services/products.services';
import { SearchParamModel } from '../shared-components/models/search-params.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  routeUtils = RouteUtils;

  productsData: Array<any> = [];

  constructor(private http: HttpClient, private userService: UserService, public router: Router, private userContext: UserContext, public rolesRestrictor: RolesRestrictorService,private productService: ProductService) {
    this.fetchData();
  }

  fetchData() {
    let searchParams = new SearchParamModel();
    searchParams['brandId'] = 14;
    this.productService.getActiveProducts(searchParams).subscribe((data: any) => {
      this.productsData = data.data.bucket.bucketListProducts;
    } )
  }

}

