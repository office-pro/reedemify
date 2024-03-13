import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared-components/shared.modules";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar"
import { MatSelectModule } from "@angular/material/select";
import { ClientProductsHome } from "./home/client-products-home.component";
import { ClientProductsRoutingModule } from "./client-products-routing.module";

@NgModule({
  declarations: [ClientProductsHome],
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, SharedModule, MatPaginatorModule, MatToolbarModule, ReactiveFormsModule, MatSelectModule, ClientProductsRoutingModule],
  exports: [],
  providers: []
})

export class ClientProductsModule{}