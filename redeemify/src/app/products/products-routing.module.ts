import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductImageUploaderComponent } from "./products-image-uploader/products-image-uploader.component";
import { CreateProductComponent } from "./create-products/create-products.component";
import { ProductsDetailComponent } from "./products-detail/products-detail.component";
import { ProductsImagesListComponent } from "./product-images-list/product-images-list.component";
import { ProductBucketHome } from "./products-buckets/home/products-bucket-home.component";
import { ProductsBucketsDetails } from "./products-buckets/details/products-buckets-details.component";
import { ProductsBucketCreateComponent } from "./products-buckets/create/products-bucket-create.component";

const routes: Routes = [
  { path: '', component: ProductsHomeComponent },
  { path: 'details/:productId', component: ProductsDetailComponent },
  { path: 'edit/:productId', component: ProductsDetailComponent },
  { path: 'upload-images', component: ProductImageUploaderComponent },
  { path: 'uploaded-images', component: ProductsImagesListComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'bucket', children: [
      {path: '', component: ProductBucketHome},
      {path: 'create',component: ProductsBucketCreateComponent},
      {path: 'details/:id', component:ProductsBucketsDetails }
    ] 
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {

}