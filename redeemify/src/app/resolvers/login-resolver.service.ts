import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { JwtTokenDecoderService } from "../shared-components/services/jwt-token.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginResolver implements CanLoad, CanActivate {

  constructor(private jwtService: JwtTokenDecoderService, private router: Router) {
    if(!!sessionStorage.getItem('token')) {
      this.jwtService.setjwtToken(sessionStorage.getItem('token') as string);
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): any {

    if(this.jwtService.jwtToken && !this.jwtService.isTokenExpired) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false
    }

  }

  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot): any {
    if(this.jwtService.isTokenExpired) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false
    }
  }
  
}