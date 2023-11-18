import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateUsersComponent } from "./create-users/create-users.component";
import { UsersHomeComponent } from "./users-home/users-home.component";
import { SuperAdminRoleResolver } from "../resolvers/super-admin-role.resolver";
import { AdminRoleResolver } from "../resolvers/admin-role.resolver";

const routes: Routes = [
  { path: '', component: UsersHomeComponent },
  // { path: 'details/:productId', component: ProductsDetailComponent },
  // { path: 'edit/:productId', component: ProductsDetailComponent },
  // { path: 'upload-images', component: ProductImageUploaderComponent },
  // { path: 'uploaded-images', component: ProductsImagesListComponent },
  { path: 'create', component: CreateUsersComponent, canActivate:[AdminRoleResolver] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule {

}