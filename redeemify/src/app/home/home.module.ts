import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from '@angular/material/sort';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared-components/shared.modules';
import { CartModule } from '../cart/cart.module';
import { AddressModule } from '../address/home/address.module';
import { HomeCheckoutComponent } from './checkout/home-checkout.component';
import { HomeProductsComponent } from './products/home-products.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatTableModule,
    SharedModule, 
    CartModule, 
    AddressModule
  ],
  declarations: [HomePage, HomeCheckoutComponent, HomeProductsComponent]
})
export class HomePageModule {}
