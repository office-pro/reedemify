import { Component, ViewChild } from '@angular/core';
import { SearchParamModel } from 'src/app/shared-components/models/search-params.model';
import { ProductService } from '../../../shared-components/services/products.services';
import { UserContext } from 'src/app/shared-components/services/user-context.service';
import { BucketRowsComponent } from '../bucket-rows/bucket-rows.component';

@Component({
  selector: 'products-bucket-create',
  templateUrl: 'products-bucket-create.component.html',
  styleUrls: ['products-bucket-create.component.scss'],
})
export class ProductsBucketCreateComponent {
  bucket: any = {
    bucketName: '',
    isActive: false,
    products: [this.createProductModel()],
  };
  productData: any = [];
  isEdit: boolean = false;
  brand$: any;
  brandId: number = 0;
  userId: number = 0;
  private clonedBrandProductsData: any = {};

  @ViewChild("bucketRows")
  bucketRowsComp: BucketRowsComponent | any;

  addedProducts: Array<any> = [];

  constructor(
    private productService: ProductService,
    private userContext: UserContext
  ) {
    this.brand$ = this.userContext.brand$.subscribe((brand: any) => {
      if (!!brand.brandId) {
        this.brandId = brand.brandId;
        this.userId = brand.user.userId;
      }
    });
  }

  createProductModel() {
    return {
      productPoints: 0,
      productId: 0,
      product: null,
    };
  }

  addNewProduct() {
    this.bucket.products.push(this.createProductModel());
  }

  removeProduct(product: any) {
    let index = this.bucket.products.indexOf(product);
    if (index > -1) {
      this.bucket.products.splice(index, 1);
    }
  }

  onProductsChange(products: any) {
    console.log('change - ', products);
    this.addedProducts = [...products];
  }

  onSave() {
    this.isEdit = false;
    let searchParams = new SearchParamModel();
    searchParams['bucket'] = [
      {
        bucketName: this.bucket.bucketName,
        brandId: this.brandId,
        isActive: this.bucket.isActive,
        userId: this.userId,
      },
    ];

    this.productService
      .createProductBuckets(searchParams)
      .subscribe((data: any) => {
        if (data.data.length > 0) {
          let createdBucket = data.data.filter(
            (obj: any) => obj.bucketName == (searchParams['bucket'][0]).bucketName
          )[0];
          let params = new SearchParamModel();

          params['bucketProducts'] = [...this.createProductsData(this.addedProducts,createdBucket.bucketId )];
           this.productService.createProductBucketsProducts(searchParams)
                        .subscribe((test:any) => {
                          console.log("added new products");
                          this.addedProducts = [];
                          (this.bucketRowsComp as BucketRowsComponent).emptyProducts();
                          // this.refreshData();
                        })
        }
      });
  }

  ngOnDestroy() {
    if (this.brand$) {
      this.brand$.unsubscribe();
    }
  }

  private createProductsData(
    productsList: Array<any> = this.addedProducts,
    bucketId: number = 0
  ) {
    let productsArr = [];

    if (!!productsList && productsList?.length > 0) {
      productsArr = productsList.map((product: any) => {
        const { price, productId, productPoints: points } = product;
        var obj: any = { price, productId, points };
        obj.bucketId = bucketId;
        obj.userId = this.userId;
        return obj;
      });
    }

    return productsArr;
  }
}
