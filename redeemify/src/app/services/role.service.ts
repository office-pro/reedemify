import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SearchParamModel } from "../shared-components/models/search-params.model";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private httpClient: HttpClient) {}

  getAllRoles(searchParams: SearchParamModel) {
    let url = "http://localhost:3000/api/roles";
    return this.httpClient.get(url);
  }
  
}