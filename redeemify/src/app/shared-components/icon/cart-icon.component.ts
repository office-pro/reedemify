import {Component} from '@angular/core';
import { CartService } from '../../cart/services/cart.service';

@Component({
  selector: 'cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})

export class CartIconComponent {
  constructor(public cartService: CartService) {}
}