import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { JwtTokenDecoderService } from "../shared-components/services/jwt-token.service";
import { Injectable } from "@angular/core";
import { UserContext } from "../shared-components/services/user-context.service";
import { RolesEnum } from "../shared-components/enums/roles.enum";
import { BaseRoleModel } from "./base-roles.model";

@Injectable({
  providedIn: 'root'
})
export class AdminRoleResolver implements CanLoad, CanActivate {

  private currentUser: any = {};

  constructor(private userContext: UserContext, private router: Router) {
    this.userContext.currentUser.subscribe((user:any) => {
      this.currentUser = BaseRoleModel.getCurrentUser(user);
    })
  }

  canLoad(route: Route, segments: UrlSegment[]): any {
    return this.isAdmin;
  }

  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot): any {
    return this.isAdmin;
  }

  private get isAdmin() {
    return BaseRoleModel.allAdmin(this.currentUser);
  }

}