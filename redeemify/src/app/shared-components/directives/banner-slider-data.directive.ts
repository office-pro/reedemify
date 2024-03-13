import {Directive, Input, Output,EventEmitter} from "@angular/core";
import { DataObtainer } from "../models/base/data-obtainer.model";
import { Observable } from "rxjs";
import { SearchParamModel } from "../models/search-params.model";
import { BrandService } from "src/app/brands/services/brands.services";

@Directive({
  selector: '[banner-slider-data],banner-slider-data'
})

export class BannerSliderDataDirective extends DataObtainer {
  @Input()
  brandId: number = 0;

  @Input()
  data: Array<any> = [];

  @Output()
  dataChange: EventEmitter<any> = new EventEmitter();

  constructor(private brandService: BrandService) {
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
    searchParams["brandId"]=this.brandId;
    return this.brandService.fetchBannerByBrandId(searchParams);
  }

}