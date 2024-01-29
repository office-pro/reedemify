import {Directive, Input, Output,EventEmitter, SimpleChange, SimpleChanges} from "@angular/core";
import { DataObtainer } from "../models/base/data-obtainer.model";
import { Observable } from "rxjs";
import { SearchParamModel } from "../models/search-params.model";
import { BrandService } from "src/app/brands/services/brands.services";
import { UserService } from "src/app/services/user.service";
import { UserContext } from "../services/user-context.service";
import { ProductService } from "src/app/shared-components/services/products.services";

@Directive({
  selector: '[buckets-data],buckets-data',
  exportAs: "bucketsData"
})

export class BucketsDataDirective extends DataObtainer {
  @Input()
  brandId: number = 0;

  @Input()
  data: Array<any> = [];

  @Input()
  key: string = "bucketName";

  @Input()
  apiCall: boolean = true;

  private brand$: any;

  @Output()
  dataChange: EventEmitter<any> = new EventEmitter();

  ngOnChanges(change: SimpleChanges) {

  }

  constructor(private productService: ProductService, private userContext: UserContext) {
    super();
    this.brand$ = this.userContext.brand$.subscribe((brand: any) => {
      this.brandId = brand.brandId;
    })
  }

  ngOnInit() {
    let searchParams = new SearchParamModel();
    if(this.apiCall) {
      this.refreshData(searchParams);
    }
  }

  protected override onAfterUpdateData(data: any): void {
    if(!!data) {
      this.data = data;
      this.dataChange.emit(data);
    }
  }

  protected override getDataObservable(searchParams: SearchParamModel): Observable<any> {
    searchParams["brandId"] = this.brandId;
    return this.productService.getProductBuckets(searchParams);
  }

}