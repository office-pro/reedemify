import { RolesEnum } from "../shared-components/enums/roles.enum";

export class BaseRoleModel {

  static isDealer(currentUser: any) {
    return currentUser?.roleName?.trim()?.toLowerCase() == RolesEnum.DEALER ||
           BaseRoleModel.allAdmin(currentUser);
  }

  static isOnlyDistributor(currentUser: any) {
    return currentUser?.roleName?.trim()?.toLowerCase() == RolesEnum.DISTRIBUTOR;
  }

  static isOnlyDealer(currentUser: any) {
    return currentUser?.roleName?.trim()?.toLowerCase() == RolesEnum.DEALER;
  }

  static isDistributor(currentUser: any) {
    return currentUser?.roleName?.trim()?.toLowerCase() == RolesEnum.DISTRIBUTOR ||
      BaseRoleModel.allAdmin(currentUser) ;
  }
  

  static isAdmin(currentUser: any) {
    return BaseRoleModel.allAdmin(currentUser)
  }

  static isOnlyAdmin(currentUser: any) {
    return (currentUser?.roleName?.trim()?.toLowerCase() == RolesEnum.ADMIN)
  }

  static isSuperAdmin(currentUser: any) {
    return currentUser?.roleName?.trim()?.toLowerCase() == RolesEnum.SUPERADMIN;
  }

  static allAdmin(currentUser: any) {
    return (currentUser?.roleName?.trim()?.toLowerCase() == RolesEnum.ADMIN) || 
           BaseRoleModel.isSuperAdmin(currentUser);
  }

  static getCurrentUser(currentUser: any) {
    if(!!currentUser) {
      const  {roleName, roleId, userId, brandId, firstName, lastName} = currentUser;
      return {roleName, roleId, userId, brandId, firstName, lastName};
    } 
    return currentUser;
  }
}