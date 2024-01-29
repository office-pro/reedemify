import {Component} from "@angular/core";
import { Router } from "@angular/router";
import { ProductUtils } from "src/app/products/utils/product.utils";

@Component({
  selector: 'product-buckets-home',
  templateUrl: './product-buckets-home.component.html',
  styleUrls: ['product-buckets-home.component.scss']
})

export class ProductBucketsHome {
  productUtils = ProductUtils 

  constructor(public router: Router) {}
}