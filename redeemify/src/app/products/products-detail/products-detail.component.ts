import {Component, Input} from "@angular/core";
import { ProductService } from "../services/products.services";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector:'products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})

export class ProductsDetailComponent {
  
  @Input()
  productId: number = 0;

  product: any = {};

  constructor(private productService: ProductService, private route: ActivatedRoute) {
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

}