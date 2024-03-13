import {Component, Input} from "@angular/core";
import { Banner } from "../models/banner/banner.model";
import { register } from 'swiper/element/bundle';
import { RouteUtils } from "src/app/utils/route.utils";
register();

@Component({
  selector: "banner-slider",
  templateUrl: "banner-slider.component.html",
  styleUrls: ['./banner-slider.component.scss']
})

export class BannerSliderComponent {
  
  @Input()
  data: Array<any>= [];

  @Input()
  showBanner: boolean = true;

  utils = RouteUtils;

  constructor() { }

  routeToLink(slide: any) {
    if(slide.link) {
      this.utils.navigateToUrl(slide.link, true);
    }
  }
  
  
}
