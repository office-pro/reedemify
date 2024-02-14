import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserContext } from "../services/user-context.service";
import { JwtTokenDecoderService } from "../services/jwt-token.service";
import { RouteUtils } from "src/app/utils/route.utils";

@Component({
  selector: "header-page",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Input()
  logo: string = "https://test-shashi-bucket.s3.amazonaws.com/Redeemify/1699108343135_Redeemify";

  @Input()
  showPoweredBy: boolean = false;

  @Input()
  showAvatar: boolean = true;

  @Input()
  points: any = "";

  openPopup: boolean = false;

  routeUtils = RouteUtils;

  constructor(public router: Router, public userContext: UserContext, public jwtService: JwtTokenDecoderService) {
    console.log("usercontext - ", this.userContext)

    this.userContext.brand$.subscribe((brand: any) => {
      if(brand.logo) {
        this.logo = brand.logo;
        this.points = brand.points;
      }

      if(brand.showPoweredByText) {
        this.showPoweredBy = brand.showPoweredByText;
      }
    })
    
  }

  navigateToHome() {
    this.router.navigateByUrl("/home");
  }

  logout() {
    this.jwtService.clearJwtToken();
    this.router.navigateByUrl("/login");
  }
  
}