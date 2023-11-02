import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginForm: any) {
    return this.http.post("http://localhost:3000/api/auth/login", loginForm)  
  }
}