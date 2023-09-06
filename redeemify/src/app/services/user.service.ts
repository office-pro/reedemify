import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {

  }

  getAllUsers() {
    return this.httpClient.get("https://test-reedemify.onrender.com/api/users");
  }
  
}