import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { ProductService } from "../services/products.services";
import { ProductCategoriesDropdownComponent } from "../product-categories-dropdown/product-categories-dropdown.component";
import { ProductCategoryModel } from "../models/product-category/product-category.model";
import { SearchParamModel } from "../models/search-params.model";

@Component({
  selector: 'edit-product-category',
  templateUrl: './edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.scss']
}) 

export class EditProductCategoryComponent {

  productCategory: ProductCategoryModel = new ProductCategoryModel();;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService) { }

  onSave() {
    if(this.productCategory.isProductCategoryValid) {
      // this.productService.crete
      let searchParams: SearchParamModel = new SearchParamModel();
      searchParams["productCategories"] = [this.productCategory.payload];
      this.productService.createProductCategory(searchParams)
                        .subscribe((data: any) => {
                          
                        })
    }
  }

}