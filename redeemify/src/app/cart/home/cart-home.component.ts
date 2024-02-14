import {Component, Input} from "@angular/core";
import { CartService } from "../services/cart.service";

@Component({
  selector: "cart-home",
  templateUrl: "./cart-home.component.html",
  styleUrls: ['./cart-home.component.scss']
})

export class CartHome {

  @Input()
  products: Array<any> = [];

  totalPoints: number = 0;

  constructor(public cartService: CartService) {}

}