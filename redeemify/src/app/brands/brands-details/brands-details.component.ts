import { Component } from "@angular/core";
import { BrandService } from "../services/brands.services";
import { ActivatedRoute } from "@angular/router";
import { AppUtilityService } from "src/app/shared-components/services/app-utility.service";

@Component({
  selector: 'brand-details',
  templateUrl: './brands-details.component.html',
  styleUrls: ['./brands-details.component.scss']
})

export class BrandDetailsComponent {

  brand: any = this.createBrandObj();
  isEdit = false;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobileNo'];
  imageUrl: string = 'https://test-shashi-bucket.s3.ap-south-1.amazonaws.com/demo-logo/logo.png';
  primaryColor: string = "";
  secondaryColor: string = "";
  blob: any;

  constructor(private brandService: BrandService, private route: ActivatedRoute, private appUtility: AppUtilityService) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params.brandId)
      if(params.brandId == 'new') {
        this.isEdit = true;
      } else {
          this.brandService.getBrandByBrandId(params.brandId)
                        .then((data:any) => {
                          data.subscribe((dataObj: any) => {
                            this.brand = dataObj[0];
                            this.updateTheme();
                          })
                        })
      }
       
    })
  }

  ngDoCheck() {
    console.log("primaryColor - ",this.primaryColor )
  }

  updateTheme() {
    this.appUtility.updateTheme(this.brand.brandCss.primaryColor,this.brand.brandCss.secondaryColor, this.brand.brandCss.headerColor, this.brand.brandCss.textColor);
  }

  showImage(event: any) {
    console.log(event)
    let file = !!event?.target?.files[0] ? event?.target?.files[0] : null;
    let fileUrl = "";
    if(!!file) {
      fileUrl = URL.createObjectURL(file);
    }
    this.imageUrl = fileUrl;
    this.blob = file;
    this.brand.brandCss.logo = fileUrl;
  }

  onSave() {
    if(!!this.brand) {
      this.isEdit = !this.isEdit;
      let formData = new FormData();
      if(this.blob) {
        formData.append('file',this.blob, this.brand.brandName);
      }

      Object.keys(this.brand).forEach((key: any) => {
        if(typeof this.brand[key] != 'object') {
          formData.append(key,this.brand[key]);
        } else {
          Object.keys(this.brand[key]).forEach((keyO: any) => {
            formData.append(keyO,(this.brand[key])[keyO]);
          })
        }
       
      })

      this.brandService.createBrands(formData).subscribe((data) => {
        console.log("data - ", data);
      })
    }
  }

  createBrandObj() {
    return {
      brandName: "",
      balance: 0,
      limit: 0,
      isActive: true,
      showPoweredByText: true,
      brandCss: {
        primaryColor: "#ffffff",
        secondaryColor: "#3dc2ff",
        headerColor: "#ffffff",
        textColor: "#0b171b",
        logo: 'https://test-shashi-bucket.s3.ap-south-1.amazonaws.com/demo-logo/logo.png',
        isDarkMode: false
      }
    }
  }
}