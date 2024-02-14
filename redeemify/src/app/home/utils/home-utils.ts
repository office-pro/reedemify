import { Router } from "@angular/router";

export class HomeUtils {

  static goToProductViewerPage(router: Router) {
    router.navigateByUrl('/home/products')
  }

  static goToCheckoutPage(router: Router) {
    router.navigateByUrl('/home/checkout')
  }
}