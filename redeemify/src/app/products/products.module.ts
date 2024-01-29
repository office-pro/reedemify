import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HttpClientModule } from "@angular/common/http";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { SharedModule } from "../shared-components/shared.modules";
import { ProductsFilterComponent } from "./products-filter/products-filter.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar"
import { ProductService } from "../shared-components/services/products.services";
import { ProductImageUploaderComponent } from "./products-image-uploader/products-image-uploader.component";
import { MatSelectModule } from "@angular/material/select";
import { CreateProductComponent } from "./create-products/create-products.component";
import { ProductsDetailComponent } from "./products-detail/products-detail.component";
import { ProductsImagesListComponent } from "./product-images-list/product-images-list.component";
import { ProductBucketHome } from "./products-buckets/home/products-bucket-home.component";
import { ProductsBucketsDetails } from "./products-buckets/details/products-buckets-details.component";
import { ProductsBucketCreateComponent } from "./products-buckets/create/products-bucket-create.component";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { BucketRowsComponent } from "./products-buckets/bucket-rows/bucket-rows.component";
import { BucketProductsEdit } from "./products-buckets/edit/bucket-products-edit.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [ProductsHomeComponent, ProductsListComponent, ProductsFilterComponent,ProductImageUploaderComponent,CreateProductComponent, ProductsDetailComponent,ProductsImagesListComponent,ProductBucketHome,ProductsBucketsDetails,ProductsBucketCreateComponent, BucketRowsComponent,BucketProductsEdit],
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, SharedModule,ProductsRoutingModule, MatPaginatorModule, MatToolbarModule, ReactiveFormsModule, MatSelectModule,MatTableModule, MatMenuModule, MatButtonModule, MatDialogModule],
  exports: [],
  providers: [ProductService]
})

export class ProductsModule{}