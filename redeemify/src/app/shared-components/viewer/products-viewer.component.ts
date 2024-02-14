import { Component, Input } from "@angular/core";
import { UserContext } from "../services/user-context.service";
import { CartService } from "src/app/cart/services/cart.service";

@Component({
  selector: 'products-viewer',
  templateUrl: './products-viewer.component.html',
  styleUrls: ['./products-viewer.component.scss']
})

export class ProductViewerComponent {
  
  @Input('data')
  productsData: Array<any> = [];

  brand: any = {};

  brandId: number = 0;

  userId: number = 0;

  @Input()
  col: number = 3

  constructor(private userContext: UserContext, public cartService: CartService) {
    this.userContext.brand$.subscribe((brand: any) => {
      this.brand = brand;
      this.brandId = brand.brandId;
      this.userId = brand.userId
    });
  }

}