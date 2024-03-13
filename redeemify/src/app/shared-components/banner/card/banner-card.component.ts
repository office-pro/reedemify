import { Component, Input, ViewChild } from "@angular/core";
import { BannerHomeComponent } from "../home/banner-home.component";
import { Banner } from "../../models/banner/banner.model";
import { AppUtilityService } from "../../services/app-utility.service";
import { BrandService } from "src/app/brands/services/brands.services";
import { SearchParamModel } from "../../models/search-params.model";


@Component({
  selector: "banner-card",
  templateUrl: "./banner-card.component.html",
  styleUrls: ["./banner-card.component.scss"]
})

export class BannerCardComponent {
  @Input()
  isEdit: boolean = false;

  @Input()
  brand: any = {};

  @Input()
  brandId: number = 0;

  bannerArr: Array<Banner> = [];

  @ViewChild('banner', {static: true})
  bannerComponent: BannerHomeComponent | undefined;

  constructor(private appUtility: AppUtilityService, private brandService: BrandService) {}

  addBanner() {
    if(this.bannerComponent) {
      this.bannerComponent.addNewBanner();
    }
  }

}