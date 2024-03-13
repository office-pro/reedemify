import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SuperAdminRoleResolver } from "../resolvers/super-admin-role.resolver";
import { AdminRoleResolver } from "../resolvers/admin-role.resolver";
import { ClientProductsHome } from "./home/client-products-home.component";

const routes: Routes = [
  { path: '', component: ClientProductsHome },
  // { path: 'details/:productId', component: ProductsDetailComponent },
  // { path: 'edit/:productId', component: ProductsDetailComponent },
  // { path: 'upload-images', component: ProductImageUploaderComponent },
  // { path: 'uploaded-images', component: ProductsImagesListComponent },
  { path: 'create', component: ClientProductsHome, canActivate:[AdminRoleResolver] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientProductsRoutingModule {

}