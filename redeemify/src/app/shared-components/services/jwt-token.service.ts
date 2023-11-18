import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserContext } from './user-context.service';

@Injectable({
  providedIn: 'root'
})

export class JwtTokenDecoderService {
  private helper: JwtHelperService | any;
  private token: string = "";

  constructor(private userContext: UserContext) {
    this.helper = new JwtHelperService();  
  }

  setjwtToken(token: string) {
    this.token = token;
    window.sessionStorage.setItem("token",token);
    let userData = this.decodeToken();
    this.userContext.setUser(userData);
  }

  clearJwtToken() {
    this.token = "";
    window.sessionStorage.removeItem("token");
    this.userContext.setUser({});
    
  }

  get jwtToken() {
    return this.token;
  }
  
  decodeToken(token: string = this.token): any {
    try {
      return this.helper.decodeToken(token);
    } catch (error) {
      console.error('JWT decode error:', error);
      return null;
    }
  }

  get expirationDate() {
    return this.helper.getTokenExpirationDate(this.token);
  }

  get isTokenExpired() {
    return !!this.token?.trim() && this.helper.isTokenExpired(this.token?.trim());
  }


}