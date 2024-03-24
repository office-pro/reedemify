import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { SearchParamModel } from "../shared-components/models/search-params.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,@Optional() @Inject("apiValue") private value: any) {
    console.log(this.value)
  }

  getAllUsers(searchParams: SearchParamModel) {
    let url = "http://localhost:3000/api/users";
    if(!!searchParams?.["brandId"]) {
      url += `/${searchParams?.["brandId"]}`;
    }

    if(!!searchParams?.["userId"]) {
      url += `/${searchParams?.["userId"]}`;
    }

    return this.httpClient.get(url);
  }

  createUsers(searchParams: SearchParamModel) {
    let url = "http://localhost:3000/api/users/create";
    return this.httpClient.post(url,!!searchParams?.["users"] ? searchParams?.["users"] : []);
  }

  deleteUsers(searchParams: SearchParamModel) {
    return this.httpClient.post("http://localhost:3000/api/users/delete",!!searchParams?.["users"] ? searchParams?.["users"] : []);
  }

  editUser(searchParams: SearchParamModel) {
    const url = `http://localhost:3000/api/users/${searchParams?.["userId"]}`;
    return this.httpClient.patch(url, searchParams?.["user"]);
  }
  
}