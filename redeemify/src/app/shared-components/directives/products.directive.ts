import {Directive, Input, Output,EventEmitter} from "@angular/core";
import { DataObtainer } from "../models/base/data-obtainer.model";
import { Observable } from "rxjs";
import { SearchParamModel } from "../models/search-params.model";
import { BrandService } from "src/app/brands/services/brands.services";
import { ProductService } from "src/app/shared-components/services/products.services";

@Directive({
  selector: '[products-data],products-data'
})

export class ProductsDataDirective extends DataObtainer {

  @Input()
  data: Array<any> = [];

  @Input()
  key: string = "productName";

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
      this.data = data.data;
      this.dataChange.emit(data.data);
    }
  }

  protected override getDataObservable(searchParams: SearchParamModel): Observable<any> {
    return this.productService.getProducts();
  }

}