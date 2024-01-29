import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { SharedModule } from "../shared-components/shared.modules";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ProductBucketsHome } from "./home/product-buckets-home.component";
import { ProductBucketsRoutingModule } from "./product-buckets-routing.module";

@NgModule({
  declarations: [ProductBucketsHome],
  imports: [CommonModule, SharedModule, IonicModule, FormsModule, ProductBucketsRoutingModule],
  exports: [ProductBucketsHome]
  
})

export class ProductBucketsModule {}