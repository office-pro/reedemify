import {Directive, Input, Output,EventEmitter} from "@angular/core";
import { DataObtainer } from "../models/base/data-obtainer.model";
import { Observable } from "rxjs";
import { SearchParamModel } from "../models/search-params.model";
import { BrandService } from "src/app/brands/services/brands.services";
import { ProductService } from "src/app/shared-components/services/products.services";

@Directive({
  selector: '[products-categories-data],products-categories-data'
})

export class ProductsCategoriesDataDirective extends DataObtainer {

  @Input()
  data: Array<any> = [];

  @Input()
  key: string = "productCategoryName";

  @Input()
  brandId: number = 0;

  @Output()
  dataChange: EventEmitter<any> = new EventEmitter();

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit() {
    let searchParams = new SearchParamModel();
    this.refreshData(searchParams);
  }

  protected override onAfterUpdateData(data: any): void {
    if(!!data) {
      console.log(data);
      this.data = data;
      this.dataChange.emit(this.data);
    }
  }

  protected override getDataObservable(searchParams: SearchParamModel): Observable<any> {
    searchParams['getProductCategories'] = true;
    return this.productService.getProductCategories(searchParams);
  }

}