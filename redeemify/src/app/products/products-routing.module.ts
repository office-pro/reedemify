import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductImageUploaderComponent } from "./products-image-uploader/products-image-uploader.component";

const routes: Routes = [
  { path: '', component: ProductsHomeComponent },
  { path: 'upload-images', component: ProductImageUploaderComponent },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {

}