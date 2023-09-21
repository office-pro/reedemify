import { Component } from "@angular/core";
import { ProductImageDetails, ProductImageDetail, ProductImageDetailModel } from "./product-images.interface";

@Component({
  selector: 'products-image-uploader',
  templateUrl: './products-image-uploader.component.html',
  styleUrls: ['./products-image-uploader.component.scss']
})

export class ProductImageUploaderComponent {

  constructor() {}
  
  imageDetails: ProductImageDetails = {
    productImageDetails: [
      new ProductImageDetailModel()
    ]
  }
  
  addProductImageDetail() {
    this.imageDetails.productImageDetails.unshift(new ProductImageDetailModel());
  }

  onRemoveProduct(imageDetail: ProductImageDetail) {
    let index = this.imageDetails.productImageDetails.indexOf(imageDetail);
    this.imageDetails.productImageDetails.splice(index,1);
  }

  get productImageDetailsLength() {
    return this.imageDetails.productImageDetails.length > 1;
  }

  uploadData() {
    console.log(this.imageDetails.productImageDetails);
  }
}