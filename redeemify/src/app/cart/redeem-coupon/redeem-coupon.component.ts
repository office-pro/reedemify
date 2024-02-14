import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'redeem-coupon',
  templateUrl:'./redeem-coupon.component.html',
  styleUrls: ['./redeem-coupon.component.scss']
})

export class RedeemCouponComponent {

  @Output()
  couponCode: EventEmitter<any> = new EventEmitter();

  


}