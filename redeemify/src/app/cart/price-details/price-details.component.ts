import { Component } from "@angular/core";
import { CartService } from "../services/cart.service";

@Component({
  selector: "price-details",
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.scss']
})


export class PriceDetailsComponent {

  constructor(private cartService: CartService) { }

  get cartItems() {
    return this.cartService;
  }


}