import {Component, Input} from "@angular/core";
import { ProductUtils } from "../utils/product.utils";
import { Router } from "@angular/router";

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent {

  productUtils = ProductUtils;
  @Input()
  searchData: string = "";
  
  @Input()
  data: Array<any> = []
  
  constructor(public router: Router) {}


}
