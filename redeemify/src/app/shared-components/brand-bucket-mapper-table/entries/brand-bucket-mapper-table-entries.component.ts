import {Component, Input} from '@angular/core';

@Component({
  selector: 'brand-bucket-mapper-table-entries',
  templateUrl: './brand-bucket-mapper-table-entries.component.html',
  styleUrls: ['./brand-bucket-mapper-table-entries.component.scss']
})

export class BrandBucketMapperTableEntries {
  bucketsData: Array<any> = [];

  @Input('data')
  brandBucketArr: Array<any> = [];

  isEdit = true;

  @Input()
  brandId: number = 0;

  @Input()
  userId: number = 0;

  @Input()
  onBucketChangeFunc: any;

  constructor(){}

  ngOnInit() {
    this.addNewMapper();
  }

  addNewMapper() {
    this.brandBucketArr.push(this.createNewMapper());
  }

  removeNewMapper(brandBucketMapperObj: any) {
    let index: number = this.brandBucketArr.indexOf(brandBucketMapperObj);
    if(index > -1) {
      this.brandBucketArr.splice(index,1)
    }
  }

  setBrandActive(i:number, value: boolean) {
    this.setAllInActive();
    this.brandBucketArr[i].isActive = value;
    this.onBucketChangeFunc(this.filteredBrandBucketArr())
  }

  private setAllInActive() {
    this.brandBucketArr = this.brandBucketArr.map((brandBucketObj: any) => {brandBucketObj.isActive = false; return brandBucketObj})
  }

  onBucketChange(brandObj: any, brandBucketObj: any) {
    brandBucketObj.bucketId = brandObj.bucketId;
    brandBucketObj.brandId = this.brandId;
    // this.onBucketChangeFunc(this.filteredBrandBucketArr())
  }

  createNewMapper() {
    return {
      brandId: this.brandId,
      bucketId: 0,
      userId: this.currentUserId,
      isActive: false
    }
  }

  get currentUserId() {
    return this.userId;
  }

  private filteredBrandBucketArr() {
    return this.brandBucketArr.filter((brandBucketObj: any) => !!brandBucketObj.bucketId)
  }
}