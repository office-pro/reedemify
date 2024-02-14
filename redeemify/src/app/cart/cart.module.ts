import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import { CartHome } from "./home/cart-home.component";
import { SharedModule } from "../shared-components/shared.modules";
import { PriceDetailsComponent } from "./price-details/price-details.component";
import { RedeemCouponComponent } from "./redeem-coupon/redeem-coupon.component";

@NgModule({
  declarations: [CartHome,PriceDetailsComponent, RedeemCouponComponent ],
  imports: [CommonModule, IonicModule, FormsModule,SharedModule],
  exports: [CartHome,PriceDetailsComponent, RedeemCouponComponent]
})

export class CartModule {}