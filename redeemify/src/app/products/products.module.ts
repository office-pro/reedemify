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
import { ProductService } from "./services/products.services";
import { ProductImageUploaderComponent } from "./products-image-uploader/products-image-uploader.component";
import { MatSelectModule } from "@angular/material/select";
import { CreateProductComponent } from "./create-products/create-products.component";
import { ProductsDetailComponent } from "./products-detail/products-detail.component";

@NgModule({
  declarations: [ProductsHomeComponent, ProductsListComponent, ProductsFilterComponent,ProductImageUploaderComponent,CreateProductComponent, ProductsDetailComponent],
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, SharedModule,ProductsRoutingModule, MatPaginatorModule, MatToolbarModule, ReactiveFormsModule, MatSelectModule],
  exports: [],
  providers: [ProductService]
})

export class ProductsModule{}