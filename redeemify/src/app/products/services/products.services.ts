import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class ProductService {

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get("http://localhost:3000/api/products")
  }

  createProducts(product: Array<any>) {
    return this.httpClient.post("http://localhost:3000/api/products/create", product)
  }

  getProductCategories() {
    return this.httpClient.get("http://localhost:3000/api/products/getProductCategories");
  }

  getSubProductCategories() {
    return this.httpClient.get("http://localhost:3000/api/products/getProductSubCategories");
  }

  getProductImages() {
    return this.httpClient.get("http://localhost:3000/api/products/getProductImages");
  }

  
}