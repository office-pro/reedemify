import { Component } from "@angular/core";
import { BrandService } from "../services/brands.services";
import { Router } from "@angular/router";
import { AppUtilityService } from "src/app/shared-components/services/app-utility.service";

@Component({
  selector: 'brand-home',
  templateUrl: './brands-home.component.html',
  styleUrls: ['./brands-home.component.scss']
})
export class BrandsHomeComponent {

  brands: Array<any> = [];

  constructor(private brandsService: BrandService, private router: Router, private appUtility: AppUtilityService) {

  }

  ngOnInit() {
    this.getAllBrands()
  }

  getAllBrands() {
    this.brandsService.getAllBrands().subscribe((data: any) => {
      this.brands = data;
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