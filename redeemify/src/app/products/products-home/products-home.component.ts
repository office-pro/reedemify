import {Component} from "@angular/core";

@Component({
  selector: 'products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})

export class ProductsHomeComponent {
  
  products: Array<any> = []
  
  constructor() {

  }


}
