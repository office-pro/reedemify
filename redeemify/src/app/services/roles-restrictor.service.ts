import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SearchParamModel } from "../shared-components/models/search-params.model";
import { UserContext } from "../shared-components/services/user-context.service";
import { BaseRoleModel } from "../resolvers/base-roles.model";

@Injectable({
  providedIn: 'root'
})
export class RolesRestrictorService {
  private currentUser: any = {};

  constructor(private userContext: UserContext) {
    this.userContext.currentUser.subscribe((data: any) => {
      this.currentUser = BaseRoleModel.getCurrentUser(data)
    })
  }

  get isSuperAdmin() {
    return BaseRoleModel.isSuperAdmin(this.currentUser);
  }

  get isAdmin() {
    return BaseRoleModel.isAdmin(this.currentUser);
  }

  get isDealer() {
    return BaseRoleModel.isDealer(this.currentUser);
  }

  get isDistributor() {
    return BaseRoleModel.isDistributor(this.currentUser);
  }

  get isDealerDistributor() {
    return this.isDealer || this.isDistributor;
  }

}