import { Router } from "@angular/router";

export class ProductUtils {
  static goToCreateRoute(router: Router) {
    router.navigateByUrl("/products/create");
  }

  static goTouploadProductImages(router: Router) {
    router.navigateByUrl("/products/upload-images");
  }

  static goToProductsHomePage(router: Router) {
    router.navigateByUrl("/products")
  }
}