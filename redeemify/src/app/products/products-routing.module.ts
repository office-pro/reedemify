import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductImageUploaderComponent } from "./products-image-uploader/products-image-uploader.component";
import { CreateProductComponent } from "./create-products/create-products.component";
import { ProductsDetailComponent } from "./products-detail/products-detail.component";
import { ProductsImagesListComponent } from "./product-images-list/product-images-list.component";

const routes: Routes = [
  { path: '', component: ProductsHomeComponent },
  { path: 'details/:productId', component: ProductsDetailComponent },
  { path: 'edit/:productId', component: ProductsDetailComponent },
  { path: 'upload-images', component: ProductImageUploaderComponent },
  { path: 'uploaded-images', component: ProductsImagesListComponent },
  { path: 'create', component: CreateProductComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {

}