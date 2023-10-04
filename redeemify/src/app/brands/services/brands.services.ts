import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of, tap } from "rxjs";

@Injectable()
export class BrandService {

  private brands: Array<any> = [];
  constructor(private http: HttpClient) {}

  getAllBrands(fetchFromServer = false): Observable<any> {
    if(!fetchFromServer && this.brands.length > 0) {
      return of([...this.brands]);
    }
    return this.http.get("http://localhost:3000/api/users/brands")
                    //.get("https://test-reedemify.onrender.com/api/users/brands")
                    .pipe(
                      map((data: any) => {
                        this.brands = data;
                        return data;
                      })
                    )
  }

  getAllBrand(fetchFromServer = false): Observable<any> {
    if(!fetchFromServer && this.brands.length > 0) {
      return of([...this.brands]);
    }
    return this.http.get("https://test-reedemify.onrender.com/api/users/brands")
                    .pipe(
                      map((data: any) => {
                        this.brands = data;
                        return data;
                      })
                    )
  }

  async getBrandByBrandId(brandId: number,fetchFromServer = false) {
    if(!fetchFromServer && this.brands.length > 0) {
      return of([...this.fetchDataByBrandId(brandId)]);
    } else {
      await this.http.get("https://test-reedemify.onrender.com/api/users/brands")
                    .toPromise()
                    .then((data: any) => {
                        this.brands = data;
                        return data;
                      });
    }

    return of([...this.fetchDataByBrandId(brandId)]);
  }

  private fetchDataByBrandId(brandId: number) {
    return this.brands.filter((data: any) => data.brandId == brandId )
  }
  
}