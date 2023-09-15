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

@NgModule({
  declarations: [ProductsHomeComponent, ProductsListComponent, ProductsFilterComponent],
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, SharedModule,ProductsRoutingModule, MatPaginatorModule],
  exports: [],
  providers: []
})

export class ProductsModule{}