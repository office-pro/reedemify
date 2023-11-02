import { Router } from "@angular/router";
import { ProductUtils } from "../products/utils/product.utils";
import { BrandsUtils } from "../brands/brands.utils";

export class RouteUtils {
  static goToProducts(router: Router) {
    ProductUtils.goToProductsHomePage(router)
  }

  static goToClientsPage(router: Router) {
    BrandsUtils.goToBrandsHome(router)
  }
}