import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { DataObtainer } from "src/app/shared-components/models/base/data-obtainer.model";
import { SearchParamModel } from "src/app/shared-components/models/search-params.model";
import { ProductService } from "../../../shared-components/services/products.services";
import { ProductUtils } from "../../utils/product.utils";
import { Router } from "@angular/router";

@Component({
  selector: 'product-bucket-home',
  styleUrls: ['./products-bucket-home.component.scss'],
  templateUrl: './products-bucket-home.component.html'
})

export class ProductBucketHome extends DataObtainer{
  
  @Input()
  brandId: number = 0;

  productUtils = ProductUtils;

  data: Array<any> = [];

  isEdit: boolean = false

  constructor(private productService: ProductService, public router: Router) {
    super();
  }

  ngOnInit() {
    this.refreshData(new SearchParamModel())
  }

  protected override getDataObservable(searchParams: SearchParamModel): Observable<any> {
    (searchParams as any).brandId = this.brandId;
    return this.productService.getProductBuckets(searchParams)
  }

  protected override onAfterUpdateData(data: any): void {
    console.log(data);
    this.data = data;
  }
}