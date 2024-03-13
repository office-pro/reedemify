import { Router } from "@angular/router";

export class HomeUtils {

  static goToProductViewerPage(router: Router) {
    router.navigateByUrl('/home/products')
  }

  static goToBrandProductViewerPage(router: Router) {
    router.navigateByUrl('/home/products/brand-products')
  }

  static goToClientProductViewerPage(router: Router) {
    router.navigateByUrl('/home/products/client-products')
  }

  static goToCheckoutPage(router: Router) {
    router.navigateByUrl('/home/checkout')
  }
}