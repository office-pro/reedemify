import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class ProductService {

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get("https://test-reedemify.onrender.com/api/products")
  }
}