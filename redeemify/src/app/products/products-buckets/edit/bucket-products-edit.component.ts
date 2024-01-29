import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button"
import { FormBuilder } from "@angular/forms";
import { ProductService } from '../../../shared-components/services/products.services';
import { SearchParamModel } from 'src/app/shared-components/models/search-params.model';

@Component({
  selector: 'bucket-products-edit',
  templateUrl: 'bucket-products-edit.component.html',
  styleUrls: ['bucket-products-edit.component.scss']
})

export class BucketProductsEdit {
  productData: Array<any> = [];
  data: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public clonedData: any, private productService: ProductService) {
    this.data = JSON.parse(JSON.stringify(clonedData));
  }

  onSelectedBrandChange(event: any) {}

  onSelectedRoleChange(event: any) {}

  ngAfterViewInit() {
    console.log("data - ", this.data)
  }

  onProductChange(product: any) {
    this.data.product = product;
    this.data.productId = product.productId;
    this.data.price = product.price;
  }

  onSave(data: any) {
    console.log(data);
    // return this.httpClient.patch(`http://localhost:3000/api/bucketListProduct/${searchParams['bucketListProductId']}`, searchParams?.['bucketListProduct']);
    let searchParams: SearchParamModel = new SearchParamModel();
    searchParams['bucketListProductId'] = data.bucketListProductId;
    searchParams['bucketListProduct'] = {
      bucketId: data.bucketId,
      bucketListProductId: data.bucketListProductId,
      productId: data.product.productId,
      points: data.points,
      price: data.product.productPrice,
      discount: data.discount,
      userId: data.newUserId
    }
    this.productService.editBucketListProducts(searchParams).subscribe((data) => {
      console.log("added data")
    })

  }

  onCancel() {
    this.data = JSON.parse(JSON.stringify(this.clonedData));
  }
  
}