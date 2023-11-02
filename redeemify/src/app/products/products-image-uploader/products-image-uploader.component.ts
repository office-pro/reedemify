import { Component } from "@angular/core";
import { ProductImageDetails, ProductImageDetail, ProductImageDetailModel } from "./product-images.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { ProductUtils } from "../utils/product.utils";
import { Router } from "@angular/router";

@Component({
  selector: 'products-image-uploader',
  templateUrl: './products-image-uploader.component.html',
  styleUrls: ['./products-image-uploader.component.scss']
})

export class ProductImageUploaderComponent {

  productUtils = ProductUtils

  constructor(private httpClient: HttpClient, public router: Router) {}

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
    let headers = new HttpHeaders();
    headers.append('Accept', 'multipart/form-data');
    let data = this.imageDetails.productImageDetails.map((productImageDetail: ProductImageDetailModel) => {
      let formData = new FormData();
      formData.append("productImageName",productImageDetail.productImageName )
      formData.append("imageUrls",'[]')
      
      productImageDetail.productImageFiles.forEach((file: any) => {
        formData.append('files[]', file, file.name)
      })

      return formData;
    })

    let observable$ = data.map((obj) => this.httpClient.post("http://localhost:3000/api/products/uploadImages", obj, {headers} ))
    forkJoin(observable$).subscribe((data: any) => console.log(data));
      
  }
}