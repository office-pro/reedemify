import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductBucketsHome } from "./home/product-buckets-home.component";

const routes: Routes = [
  { path: '', component: ProductBucketsHome }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductBucketsRoutingModule {

}