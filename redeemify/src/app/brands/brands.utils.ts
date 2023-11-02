import { Router } from "@angular/router";

export class BrandsUtils {
  static goToBrandsHome(router: Router) {
    router.navigateByUrl("/brands")
  }
}