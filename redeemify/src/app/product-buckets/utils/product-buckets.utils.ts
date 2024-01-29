import { Router } from "@angular/router";

export class ProductBucketUtils {

  static goToProductBucketHomePage(router: Router) {
    router.navigateByUrl("/productbuckets")
  }

}