import { Component, ViewChild } from "@angular/core";
import { AppUtilityService } from "../services/app-utility.service";
import { SafeHtml } from "@angular/platform-browser";
import {template} from '../templates/create-product-category'
import { EditProductCategoryComponent } from "../edit-product-category/edit-product-category.component";
import { ProductsCategoriesDataDirective } from "../directives/product-categories-data.directive";

@Component({
  selector: 'product-categories-dropdown',
  templateUrl: './product-categories-dropdown.component.html',
  styleUrls: ['./product-categories-dropdown.component.scss']
})

export class ProductCategoriesDropdownComponent {

  productCategories: Array<any> = [];
  templateData: SafeHtml | undefined;
  productCategoryName: string = "";
  customActionComponent: any = EditProductCategoryComponent;

  @ViewChild('productCategoryDirective')
  productCategoryDirective: ProductsCategoriesDataDirective | undefined;


  constructor(private utilityService: AppUtilityService){
    this.templateData = utilityService.safeHTML(template(this))
  }

  createProductCategory() {
    console.log("createProductCategory")

  }

  onCancel() {
    console.log("onCancel")

  }

  customAction() {
    console.log("customAction");
    if(!!this.productCategoryDirective) {
      this.productCategoryDirective.refreshData();
    }
  }

}