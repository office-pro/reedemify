import { Component, Input, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { DataObtainer } from "src/app/shared-components/models/base/data-obtainer.model";
import { SearchParamModel } from "src/app/shared-components/models/search-params.model";
import { ProductService } from "../../../shared-components/services/products.services";
import { UserContext } from "src/app/shared-components/services/user-context.service";
import { ProductUtils } from "../../utils/product.utils";
import { BucketRowsComponent } from "../bucket-rows/bucket-rows.component";
import { AppUtilityService } from "src/app/shared-components/services/app-utility.service";
import { MatDialog } from "@angular/material/dialog";
import { BucketProductsEdit } from "../edit/bucket-products-edit.component";


@Component({
  selector: 'products-buckets-details',
  templateUrl: './products-buckets-details.component.html',
  styleUrls: ['./products-buckets-details.component.scss']
})

export class ProductsBucketsDetails extends DataObtainer{

  @Input()
  bucketId: number = 0;

  @Input()
  brandId: number = 0;

  brandProductsData: any = {};
  private clonedBrandProductsData: any = {};
  displayedColumns: any = ["productName", "points", "productCategory", "productSubCategory", "user","actions"];

  productUtils = ProductUtils;
  isEdit: boolean = false;
  productList: Array<any> = [];
  addedProducts: Array<any> = [];

  @ViewChild("bucketRows")
  bucketRowsComp: BucketRowsComponent | any;

  private brand$: any;
  userId: number = 0;

  constructor(private route: ActivatedRoute,private productService: ProductService, private userContext: UserContext, public router: Router, private appUtility: AppUtilityService, public dialog: MatDialog) {
    super();
    this.brand$ = this.userContext.brand$.subscribe((brand: any) => {
      if(!!brand.brandId) {
        this.brandId = brand.brandId;
        this.userId = brand.user.userId;
        if(!!this.route.snapshot.params?.["id"]) {
          this.bucketId = this.route.snapshot.params?.["id"];
          this.refreshData(new SearchParamModel({bucketId: this.bucketId, brandId: this.brandId}))
        }
      } 
    })
    
  }

  protected override getDataObservable(searchParams: SearchParamModel): Observable<any> {
    return this.getBucketData(searchParams);
  }

  getBucketData(searchParams: SearchParamModel): Observable<any> {
    return this.productService.getProductBuckets(searchParams);
  }

  protected override onAfterUpdateData(data: any): void {
    if(!!data && data?.length > 0) {
      this.brandProductsData = data[0];
      this.clonedBrandProductsData = JSON.parse(JSON.stringify(data[0]));
    }
  }

  ngOnDestroy() {
    if(!!this.brand$) {
      this.brand$.unsubscribe();
    }
  }

  onDelete(element: any) {
    if(!!element.bucketListProductId) {
      this.appUtility.presentConfirmationPopup(`Do you want to delete <b>${element.product.productName}</b> from <b>${this.brandProductsData.bucketName}</b> ?`, "Confirm Delete", {
        onConfirm: () => {
          let searchParams = new SearchParamModel();
          searchParams['deleteBucketProducts'] = [element.bucketListProductId]
          this.productService.deleteProductBucketsProducts(searchParams)
                          .subscribe((data) => {
                            this.refreshData();
                          })
        },
        buttonName: "Delete",
        cssClass:"danger"
      })
      
    }
  }

  onEdit(element: any) {
    this.openDialog(element)
  }

  onProductsChange(products: any) {
    console.log("change - ",products)
    this.addedProducts = [...products];
  }

  compareDataIfDirty() {
    let presevedData = JSON.parse(JSON.stringify(this.clonedBrandProductsData));
    let changedData = JSON.parse(JSON.stringify(this.brandProductsData));
    const changedInstance = {
      isBucketNameChanged: changedData?.bucketName?.toLowerCase() != presevedData?.bucketName?.toLowerCase(),
      isProductsEdited: false,
      isProductsAdded: this.addedProducts?.length > 0
    }

    return changedInstance

  }

  openDialog(elem: any) {
    const dialogRef = this.dialog.open(BucketProductsEdit,{
      data: {...elem,newUserId: this.userId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSave() {
    if(this.compareDataIfDirty().isProductsAdded) {
      if(this?.bucketRowsComp?.updateProduct) {
        this.bucketRowsComp.updateProduct()
      }
      let searchParams = new SearchParamModel();
      searchParams['bucketProducts'] = [...this.createProductsData()];
      this.productService.createProductBucketsProducts(searchParams)
                        .subscribe((data) => {
                          console.log("added new products");
                          this.addedProducts = [];
                          (this.bucketRowsComp as BucketRowsComponent).emptyProducts();
                          this.refreshData();
                        })
    }

    if(this.compareDataIfDirty().isBucketNameChanged) {
      let searchParams = new SearchParamModel();
      searchParams['bucket'] = [{
        bucketId: this.bucketId,
        bucketName: this.brandProductsData.bucketName,
        userId: this.userId
      }];
      this.productService.createProductBuckets(searchParams['bucket'])
                         .subscribe((data: any) => {
                           this.refreshData();
                         });
    }

  }

  private createProductsData(productsList: Array<any> = this.addedProducts) {
    
    let productsArr = [];

    if(!!productsList && productsList?.length > 0) {
      productsArr = productsList.map((product: any) => {
        const {price, productId, productPoints:points} = product
        var obj: any= {price,productId,points};
        obj.bucketId = this.clonedBrandProductsData.bucketId;
        obj.userId = this.userId;
        return obj;
      })
    }

    return productsArr;
  }
}