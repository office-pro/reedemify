import { Component } from "@angular/core";
import { BrandService } from "../services/brands.services";
import { Router } from "@angular/router";

@Component({
  selector: 'brand-home',
  templateUrl: './brands-home.component.html',
  styleUrls: ['./brands-home.component.scss']
})
export class BrandsHomeComponent {

  brands: Array<any> = [];

  constructor(private brandsService: BrandService, private router: Router) {

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
    this.router.navigateByUrl(`/brands/${brand.brandId}`)
  }
  
}