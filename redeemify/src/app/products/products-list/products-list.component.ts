import {Component} from "@angular/core";

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent {
  
  products: Array<any> = []
  
  constructor() {

  }


}
