import {Component, Input, ViewChild} from "@angular/core";
import { BrandBucketMapperTableEntries } from "./entries/brand-bucket-mapper-table-entries.component";
import { ProductService } from "src/app/shared-components/services/products.services";
import { SearchParamModel } from "../models/search-params.model";

@Component({
  selector: 'brand-bucket-mapper-table',
  styleUrls: ['./brand-bucket-mapper-table.component.scss'],
  templateUrl: './brand-bucket-mapper-table.component.html'
})

export class BrandBucketMapperTable {

  @ViewChild('brandBucketMapper')
  brandBucketMapper: BrandBucketMapperTableEntries | unknown;

  @Input()
  brandId: number = 0;

  @Input()
  userId: number = 0;

  brandBucketMapperData: Array<any> = [];

  constructor(private productService: ProductService) {
   
  }

  onAdd() {
    (this.brandBucketMapper as BrandBucketMapperTableEntries).addNewMapper();
  }

  onBucketChange(bucketArr: Array<any> = []) {
    let searchParams = new SearchParamModel();
    searchParams['brandBucketObj'] = bucketArr
    this.productService.mapBucketToBrand(searchParams).subscribe((data: any) => {
      alert("bucket mapped successfully")
    })
  }

  onSave() {
    this.onBucketChange(this.brandBucketMapperData);
  }

  fetchBucketsBasedOnBrand() {
    let searchParams = new SearchParamModel();
    searchParams['brandId'] = this.brandId;
    this.productService.getMappedBuckets(searchParams).subscribe((data: any) => {
      this.brandBucketMapperData = data;
    });
  }

  ngAfterViewInit() {
    this.fetchBucketsBasedOnBrand();
  }

}