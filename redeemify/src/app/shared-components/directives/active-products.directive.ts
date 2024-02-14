import {Directive, Input, Output,EventEmitter} from "@angular/core";
import { DataObtainer } from "../models/base/data-obtainer.model";
import { Observable } from "rxjs";
import { SearchParamModel } from "../models/search-params.model";
import { BrandService } from "src/app/brands/services/brands.services";
import { ProductService } from "../services/products.services";

@Directive({
  selector: '[active-products-data],active-products-data'
})

export class ActiveProductsDataDirective extends DataObtainer {
  @Input()
  brandId: number = 0;

  @Input()
  data: Array<any> = [];

  @Input()
  key: string = "brandName";

  @Output()
  dataChange: EventEmitter<any> = new EventEmitter();

  constructor(private productsService: ProductService) {
    super();
  }

  ngOnInit() {
    let searchParams = new SearchParamModel();
    searchParams['brandId'] = this.brandId;
    this.refreshData(searchParams);
  }

  protected override onAfterUpdateData(data: any): void {
    if(!!data) {
      this.data = data.data;
      this.dataChange.emit(data.data);
    }
  }

  protected override getDataObservable(searchParams: SearchParamModel): Observable<any> {
    return this.productsService.getActiveProducts(searchParams);
  }

}