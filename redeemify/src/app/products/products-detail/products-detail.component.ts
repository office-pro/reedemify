import {Component, Input} from "@angular/core";
import { ProductService } from "../../shared-components/services/products.services";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductUtils } from "../utils/product.utils";
import { AppUtilityService } from "src/app/shared-components/services/app-utility.service";

@Component({
  selector:'products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})

export class ProductsDetailComponent {
  
  @Input()
  productId: number = 0;

  product: any = {};

  isEdit: boolean = false;

  productUtils = ProductUtils;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router,private appUtility: AppUtilityService) {
    if(this.route.snapshot.params['productId']) {
      this.productId = this.route.snapshot.params['productId'];
      console.log("productId - ", this.productId)
    }
  }

  ngOnInit() {
    this.productService.getProductsByProductId(0,this.productId)
                        .subscribe((data: any) => {
                          this.product = data;
                        })
    
  }

  onProductDelete() {
    if(!!this.productId) {
      this.appUtility.presentConfirmationPopup(`Do you want to delete ${this.product.productName} ?`, "Confirm Delete", {
        onConfirm: () => {
          this.productService.deleteProducts([this.productId])
                          .subscribe((data) => {
                            console.log("data deleted");
                            this.productUtils.goToProductsHomePage(this.router);
                          })
        },
        buttonName: "Delete",
        cssClass:"danger"
      })
      
    }
  }

}