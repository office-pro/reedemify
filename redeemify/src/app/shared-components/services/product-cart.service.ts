import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { SearchParamModel } from "../models/search-params.model";

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {
  
  constructor(private http: HttpClient) {}

  addToCart(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.http.post("http://localhost:3000/api/products/addToCart", searchParams["cartItems"]);
  }

  deleteCartItems(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.http.post("http://localhost:3000/api/products/cart/delete", searchParams["cartItemsIds"]);
  }

  getCartItems(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.http.get(`http://localhost:3000/api/products/cart?${this.addCartId(searchParams)}${this.addUserId(searchParams)}${this.addBrandId(searchParams)}`);
  }

  private addCartId(searchParams: SearchParamModel) {
    return searchParams?.['cartId'] ? `cartId=${searchParams?.['cartId']}&`: '';
  }

  private addUserId(searchParams: SearchParamModel) {
    return searchParams?.['userId'] ? `userId=${searchParams?.['userId']}&`: '';
  }

  private addBrandId(searchParams: SearchParamModel) {
    return searchParams?.['brandId'] ? `brandId=${searchParams?.['brandId']}&`: '';
  }

}