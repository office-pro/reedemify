import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SearchParamModel } from "src/app/shared-components/models/search-params.model";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) {

  }

  addAddress(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.httpClient.post("http://localhost:3000/api/address/create", searchParams['address'])
  }

  editAddress(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.httpClient.post("http://localhost:3000/api/address/edit", searchParams['address'])

  }

  getAddress(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.httpClient.get(`http://localhost:3000/api/address/fetch?${this.addUserId(searchParams)}${this.addAddressId(searchParams)}`)
  }

  deleteAddress(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.httpClient.post(`http://localhost:3000/api/address/delete`, searchParams['addressIds']);
  }


  private addUserId(searchParams: SearchParamModel) {
    return searchParams?.['userId'] ? `userId=${searchParams?.['userId']}&`: '';
  }

  private addAddressId(searchParams: SearchParamModel) {
    return searchParams?.['addressId'] ? `brandId=${searchParams?.['addressId']}&`: '';
  }
}
