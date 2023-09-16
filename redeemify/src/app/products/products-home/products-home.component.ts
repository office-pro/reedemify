import {Component} from "@angular/core";
import { ProductService } from "../services/products.services";

@Component({
  selector: 'products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})

export class ProductsHomeComponent {
  
  products: Array<any> = []
  
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = [...data,...data,...data,...data];
      console.log(this.products);
    })
  }


}
