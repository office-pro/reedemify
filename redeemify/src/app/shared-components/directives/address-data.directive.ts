import {Directive, Input, Output,EventEmitter} from "@angular/core";
import { DataObtainer } from "../models/base/data-obtainer.model";
import { Observable } from "rxjs";
import { SearchParamModel } from "../models/search-params.model";
import { BrandService } from "src/app/brands/services/brands.services";
import { ProductService } from "../services/products.services";
import { AddressService } from "src/app/address/service/address.service";

@Directive({
  selector: '[address-data],address-data',
  exportAs: 'addressData'
})

export class AddressDataDirective extends DataObtainer {
  @Input()
  userId: number = 0;

  @Input()
  data: Array<any> = [];

  @Input()
  key: string = "addressName";

  @Output()
  dataChange: EventEmitter<any> = new EventEmitter();

  constructor(private addressService: AddressService) {
    super();
  }

  ngOnInit() {
    let searchParams = new SearchParamModel();
    searchParams['userId'] = this.userId;
    this.refreshData(searchParams);
  }

  protected override onAfterUpdateData(data: any): void {
    if(!!data) {
      this.data = data.data;
      this.dataChange.emit(data.data);
    }
  }

  protected override getDataObservable(searchParams: SearchParamModel): Observable<any> {
    return this.addressService.getAddress(searchParams);
  }

}