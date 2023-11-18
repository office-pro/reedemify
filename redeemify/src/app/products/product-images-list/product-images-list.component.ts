import {Component, Input} from "@angular/core";
import { ProductService } from "../services/products.services";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductUtils } from "../utils/product.utils";
import { AppUtilityService } from "src/app/shared-components/services/app-utility.service";

@Component({
  selector:'product-images-list',
  templateUrl: './product-images-list.component.html',
  styleUrls: ['./product-images-list.component.scss']
})

export class ProductsImagesListComponent {

  private data: Array<any> = [];
  filteredData: Array<any> = [];
  productSearch: string = "";

  
  productUtils = ProductUtils;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router,private appUtility: AppUtilityService) {
    
  }

  ngOnInit() {
    this.productService.getProductImages().subscribe((data: any) => {
      this.data = data;
      this.filteredData = JSON.parse(JSON.stringify(data));
      console.log(this.filteredData)
    })
    
  }

  onSearch(searchValue: string) {
    if(!!searchValue?.trim()) {
      this.filteredData = [...this.data.filter((value: any) => value?.productImagesName?.toLowerCase().includes(searchValue?.toLowerCase()) )];
    } else {
      this.filteredData = [...this.data];
    }
  }

  

}