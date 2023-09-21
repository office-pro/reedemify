import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
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

@NgModule({
  declarations: [ProductsHomeComponent, ProductsListComponent, ProductsFilterComponent,ProductImageUploaderComponent],
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, SharedModule,ProductsRoutingModule, MatPaginatorModule, MatToolbarModule],
  exports: [],
  providers: [ProductService]
})

export class ProductsModule{}