import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ThemeService } from "./theme.service";

@Injectable({
  providedIn: 'root'
})
export class UserContext {

  
private user: any = {};
  private user$ = new BehaviorSubject({});
  brandCss$ = new BehaviorSubject({});
  brandLogo$ = new BehaviorSubject("");
  brand$ = new BehaviorSubject({})

  constructor(private themeService: ThemeService) {}
  
  setUser(user: any) {
    this.user = user;
    this.user$.next(user);
    this.brandCss$.next(this.brandCss);
    this.brandLogo$.next(this.brandLogo);
    this.brand$.next({
      brandName: this.user.brandName,
      brandCss: this.brandCss,
      logo: this.brandLogo,
      isActive: this.user.isActive,
      brandId: this.user.brandId,
      showPoweredByText: this.user.showPoweredByText
    })
    this.themeService.updateCustomColors(this.brandCss?.primaryColor, this.brandCss?.secondaryColor, this.brandCss?.headerColor,this.brandCss?.textColor)
  }

  get currentUser() {
    return this.user$;
  }

  get brandCss() {
    return !!this?.user?.brandCss ? this?.user?.brandCss : {
        primaryColor: "#ffffff",
        secondaryColor: "#3dc2ff",
        headerColor: "#ffffff",
        textColor: "#0b171b",
        logo: "https://test-shashi-bucket.s3.amazonaws.com/Redeemify/1699108343135_Redeemify",
        isDarkMode: false
      };
  }

  get brandLogo() {
    return !!this?.user?.brandCss?.logo ? this?.user?.brandCss?.logo : "https://test-shashi-bucket.s3.amazonaws.com/Redeemify/1699108343135_Redeemify";
  }

  get currentRole() {
    return !!this?.user?.role && !!this?.user?.roleId ? {
      roleId: this?.user?.roleId,
      role: this?.user?.role
    } : {};
  }

  get currentName() {
    return !!this?.user?.firstName  ? this?.user?.firstName  : "";
  }

}