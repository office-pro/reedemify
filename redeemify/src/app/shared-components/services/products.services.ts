import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SearchParamModel } from "src/app/shared-components/models/search-params.model";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClient) {}

  getProducts(brandId: number = 0) {
    return this.httpClient.get("http://localhost:3000/api/products");
  }

  getProductsByProductId(brandId: number = 0, productId: number) {
    return this.httpClient.get("http://localhost:3000/api/products/getProductByProductId/"+productId)
  }

  createProducts(product: Array<any>) {
    return this.httpClient.post("http://localhost:3000/api/products/create", product)
  }

  getProductCategories(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.httpClient.get("http://localhost:3000/api/products/getProductCategories"+`${!!searchParams['getProductCategories'] ? '?getOnlyCategories='+searchParams['getProductCategories']:''}`);
  }

  getSubProductCategories(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.httpClient.get("http://localhost:3000/api/products/getProductSubCategories"+`${!!searchParams['getProductSubCategories'] ? '?getOnlySubCategories='+searchParams['getProductSubCategories']:''}`);
  }

  getProductImages() {
    return this.httpClient.get("http://localhost:3000/api/products/getProductImages");
  }

  deleteProducts(productArrIds: Array<number> = []) {
    return this.httpClient.post("http://localhost:3000/api/products/deleteProducts", productArrIds)
  }

  getProductBuckets(searchParams: SearchParamModel) {
    return this.httpClient.get(`http://localhost:3000/api/buckets/${!!searchParams?.["bucketId"] ? '/'+searchParams?.["bucketId"] : ''}`);
  }

  createProductBuckets(searchParams: SearchParamModel) {
    return this.httpClient.post(`http://localhost:3000/api/buckets/createBucket`, searchParams?.['bucket']);
  }

  deleteProductBuckets(searchParams: SearchParamModel) {
    return this.httpClient.post(`http://localhost:3000/api/buckets/deleteBucket`, searchParams?.['bucketIds']);
  }

  createProductBucketsProducts(searchParams: SearchParamModel) {
    return this.httpClient.post(`http://localhost:3000/api/buckets/createBucketListProduct`, searchParams?.['bucketProducts']);
  }

  deleteProductBucketsProducts(searchParams: SearchParamModel) {
    return this.httpClient.post(`http://localhost:3000/api/buckets/deleteBucketListProduct`, !!searchParams?.['deleteBucketProducts'] ? searchParams?.['deleteBucketProducts'] : []);
  }

  editBucketListProducts(searchParams: SearchParamModel) {
    return this.httpClient.patch(`http://localhost:3000/api/buckets/bucketListProduct/${searchParams['bucketListProductId']}`, searchParams?.['bucketListProduct']);
  }

  mapBucketToBrand(searchParams: SearchParamModel) {
    return this.httpClient.post(`http://localhost:3000/api/buckets/mapBrandToBucket`, searchParams?.['brandBucketObj']);
  }

  getMappedBuckets(searchParams: SearchParamModel) {
    return this.httpClient.get(`http://localhost:3000/api/buckets/getMappedBuckets/${searchParams?.['brandId']}${!!searchParams?.['bucketId'] ? '/'+searchParams?.['bucketId'] : ''}`);
  }

  getActiveProducts(searchParams: SearchParamModel) {
    return this.httpClient.get(`http://localhost:3000/api/brands/${searchParams?.['brandId']}/products`);

  }

}