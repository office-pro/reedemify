import { Component } from "@angular/core";
import { BrandService } from "../services/brands.services";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'brand-details',
  templateUrl: './brands-details.component.html',
  styleUrls: ['./brands-details.component.scss']
})

export class BrandDetailsComponent {

  brand: any;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobileNo'];

  constructor(private brandService: BrandService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
       this.brandService.getBrandByBrandId(params.brandId)
                        .then((data:any) => {
                          data.subscribe((dataObj: any) => {
                            this.brand = dataObj[0]
                          })
                        })
    })
  }
}