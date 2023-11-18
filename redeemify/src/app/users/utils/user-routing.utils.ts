import { Router } from "@angular/router";

export class UserRoutingUtils {

  static goToUsersCreatePage(router: Router) {
    router.navigateByUrl("/users/create");
  }

  static goToUsersHomePage(router: Router) {
    router.navigateByUrl("/users");
  }
  
}