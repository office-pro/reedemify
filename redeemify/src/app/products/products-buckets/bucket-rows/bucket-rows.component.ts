import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'bucket-rows',
  templateUrl:'./bucket-rows.component.html',
  styleUrls: ['bucket-rows.component.scss'],
  exportAs: "bucketRows"
})

export class BucketRowsComponent {

  @Input()
  isEdit: boolean = false;

  bucket: any = {
    products: [this.createProductModel()]
  };
  productData: any = []

  @Output()
  productsChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  addNewProduct() {
    this.bucket.products.push(this.createProductModel());
    this.updateProduct();
  }

  removeProduct(product: any) {
    let index = this.bucket.products.indexOf(product);
    if(index > -1) {
      this.bucket.products.splice(index,1);
    }
    this.updateProduct();
  }

  updateProduct() {
    this.productsChange.emit(this.filterEmptyProducts);
  }

  emptyProducts() {
    this.bucket.products = [];
    this.addNewProduct();
  }

  createProductModel() {
    return  {
      productPoints: 0,
      productId: 0,
      price: 0,
      product: null
    }
  }

  onProductChange(productObj: any, productModel: { productPoints: number, productId: number, product: any, price: number }) {
    productModel.product = JSON.parse(JSON.stringify(productObj));
    productModel.productId = productModel.product.productId;
    productModel.price = parseInt(productModel.product.productPrice);
    this.updateProduct();
  }

  private get filterEmptyProducts() {
    return this.bucket.products.filter((product: any) => !!product.product && !!product.productPoints)
  }
}