import {Component, Input} from "@angular/core";
import { Banner } from "../../models/banner/banner.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { UserContext } from "../../services/user-context.service";
import { AppUtilityService } from "../../services/app-utility.service";
import { BrandService } from "src/app/brands/services/brands.services";
import { SearchParamModel } from "../../models/search-params.model";

@Component({
  selector: "banner-home",
  templateUrl: "./banner-home.component.html",
  styleUrls: ['./banner-home.component.scss']
})

export class BannerHomeComponent {
  @Input()
  bannerData: Banner[] = [];

  brandId: number = 0;
  userId: number = 0;

  constructor(private httpClient: HttpClient, private userContext: UserContext, private appUtility: AppUtilityService, private brandService: BrandService) {
    this.addNewBanner();
  }

  ngOnInit() {
    this.userContext.brand$.subscribe((data: any) => {
      const {brandId, user} = data;
      this.brandId = brandId;
      this.userId = user.userId;
    })
  }

  addNewBanner() {
    this.bannerData.push(this.createBanner());
  }

  createBanner() {
    return new Banner("","","","");
  }

  removeBanner(index: number) {
    this.bannerData.splice(index,1);
  }

  
  onBannerDelete(index: number) {
    let banner = this.bannerData[index];
    if(!!banner) {
      let searchParams = new SearchParamModel();
      if(banner?.bannerId) {
        searchParams["bannerId"] = banner.bannerId;
      }
      this.appUtility.presentConfirmationPopup(`Do you want to delete Banner ?`, "Confirm Delete", {
        onConfirm: () => {
          if(!!banner.bannerId) {
            this.brandService.deleteBannerByBrandId(searchParams)
                            .subscribe((data) => {
                              this.removeBanner(index);
                              console.log("data deleted");
                            })
          } else {
            this.removeBanner(index);
          }
        },
        buttonName: "Delete",
        cssClass:"danger"
      })
      
    }
  }

  clearImage(banner: Banner) {
    banner.image = null;
    banner.imageUrl = "";
  }

  saveBanner() {
    let headers = new HttpHeaders();
    headers.append('Accept', 'multipart/form-data');
    let data = this.bannerData.map((banner: Banner, i: number) => {

      if(!banner.bannerId) {
        let formData = new FormData();
        formData.append("headerText",banner.headerText );
        formData.append("subHeaderText",banner.subHeaderText );
        formData.append("imageUrl",banner.imageUrl );
        formData.append("brandId", this.brandId.toString() );
        formData.append("userId", this.userId.toString() );
        formData.append("link", banner.link);
        formData.append('files', banner.image, banner.image.name)
        return formData;
      }
      return null
    }).filter((formData) => !!formData);

    let observable$ = data.map((obj) => this.httpClient.post("http://localhost:3000/api/brands/createBrandBanner", obj, {headers} ))
    forkJoin(observable$).subscribe((data: any) => console.log(data));
  }


}