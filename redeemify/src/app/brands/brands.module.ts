import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { BrandsRoutingModule } from "./brands-routing-module";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared-components/shared.modules";
import { BrandsHomeComponent } from "./brands-home/brands-home.component";
import {MatPaginatorModule} from '@angular/material/paginator'
import { HttpClientModule } from "@angular/common/http";
import { BrandService } from "./services/brands.services";
import { BrandDetailsComponent } from "./brands-details/brands-details.component";
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [BrandsHomeComponent, BrandDetailsComponent],
  imports: [CommonModule,FormsModule,HttpClientModule,IonicModule,SharedModule,MatPaginatorModule,BrandsRoutingModule, MatTableModule],
  exports: [],
  providers: []
})

export class BrandsModule {

}