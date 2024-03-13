import { Component, Input } from "@angular/core";
import { UserContext } from "../services/user-context.service";
import { CartService } from "src/app/cart/services/cart.service";
import { Banner } from "../models/banner/banner.model";
import { HomeUtils } from "src/app/home/utils/home-utils";
import { Router } from "@angular/router";

@Component({
  selector: 'products-viewer',
  templateUrl: './products-viewer.component.html',
  styleUrls: ['./products-viewer.component.scss']
})

export class ProductViewerComponent {
  
  @Input('data')
  productsData: Array<any> = [];

  bannerArr: Banner[] = [];

  brand: any = {};

  brandId: number = 0;

  userId: number = 0;

  @Input()
  showBanner: boolean = false;

  @Input()
  showClientProducts: boolean = false;

  @Input()
  col: number = 3

  utils = HomeUtils;

  products: Array<any> = [];
  responsiveOptions: Array<any> = [];

  constructor(private userContext: UserContext, public cartService: CartService, public router: Router) {
    this.userContext.brand$.subscribe((brand: any) => {
      this.brand = brand;
      this.brandId = brand.brandId;
      this.userId = brand.userId;
      this.showClientProducts = brand.showClientProducts;
      this.showBanner = brand.showBanner;
    });
  }



  // carousal code 

   ngOnInit() {

    }


  // end of carousal code

}