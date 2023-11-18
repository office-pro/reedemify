import { Router } from "@angular/router";
import { ProductUtils } from "../products/utils/product.utils";
import { BrandsUtils } from "../brands/brands.utils";
import { UserRoutingUtils } from "../users/utils/user-routing.utils";

export class RouteUtils {
  static goToProducts(router: Router) {
    ProductUtils.goToProductsHomePage(router)
  }

  static goToProductsUploadedImages(router: Router) {
    ProductUtils.goTouploadedProductImages(router)
  }

  static goToClientsPage(router: Router) {
    BrandsUtils.goToBrandsHome(router)
  }

  static goToUsersCreatePage(router: Router) {
    UserRoutingUtils.goToUsersCreatePage(router)
  }

  static goToUsersHomePage(router: Router) {
    UserRoutingUtils.goToUsersHomePage(router)
  }
}