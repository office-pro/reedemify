import { Component } from "@angular/core";
import { MultiImageSlider } from "../models/multi-image-slider/multi-image-slider.model";
import { UserContext } from "../services/user-context.service";

@Component({
  selector: 'multi-image-slider',
  templateUrl: "./multi-image-slider.component.html",
  styleUrls: ['./multi-image-slider.component.scss']
})
export class MultiImageSliderComponent {
  data: MultiImageSlider[] = [];
  brandId: number = 0;
  userId: number = 0;

  constructor(private userContextService: UserContext) {

  }

  ngOnInit() {
    this.userContextService.brand$.subscribe((brandData: any) => {
     const {brandId, userId} = brandData;
     this.brandId = brandId;
     this.userId = userId;
    })
  }
}