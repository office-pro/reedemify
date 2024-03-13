import {Component, Input} from "@angular/core";
import { CartService } from "src/app/cart/services/cart.service";

@Component({
  selector: 'brand-products-viewer',
  templateUrl: 'brand-products.component.html',
  styleUrls: ['./brand-products.component.scss']
})

export class BrandProductsViewer {
  @Input('data')
  productData: Array<any> = [];

  @Input()
  col: number = 3

  constructor(public cartService: CartService) {

  }

}