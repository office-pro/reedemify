import { Component } from "@angular/core";
import { BrandService } from "../services/brands.services";
import { Router } from "@angular/router";
import { AppUtilityService } from "src/app/shared-components/services/app-utility.service";
import { PageOptions } from "src/app/shared-components/models/page-options.model";
import { UrlUtils } from "src/app/utils/url.utils";

@Component({
  selector: 'brand-home',
  templateUrl: './brands-home.component.html',
  styleUrls: ['./brands-home.component.scss']
})
export class BrandsHomeComponent {

  brands: Array<any> = [];
  searchData: string = ""
  pageOptions:PageOptions = new PageOptions();

  constructor(private brandsService: BrandService, private router: Router, public appUtility: AppUtilityService) {
  }

  ngOnInit() {
    this.getAllBrands();
  }

  getAllBrands() {
    const {page,limit} = UrlUtils.convertQueryParamsToObject();

    this.brandsService.getAllBrands(false,{page,limit}).subscribe((data: any) => {
      this.brands = data.data;
      this.pageOptions.total = data.total;
    })
  }

  goToBrandDetails(brand: any) {
    if(brand.brandId) {
      this.router.navigateByUrl(`/brands/${brand.brandId}`)
    } else {
      this.router.navigateByUrl(`/brands/new`)
    }
  }

  
}