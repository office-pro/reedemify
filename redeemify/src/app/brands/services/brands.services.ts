import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    return this.http.get("http://localhost:3000/api/brands")
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
    return this.http.get("http://localhost:3000/api/brands")
                    .pipe(
                      map((data: any) => {
                        this.brands = data;
                        return data;
                      })
                    )
  }

  async getBrandByBrandId(brandId: number,fetchFromServer = false) {
    return this.http.get("http://localhost:3000/api/brands/"+brandId)
  }

  private fetchDataByBrandId(brandId: number) {
    return this.brands.filter((data: any) => data.brandId == brandId )
  }

  createBrands(brand: any) {
    let headers = new HttpHeaders();
    headers.append('Accept', 'multipart/form-data;application/json');
    return this.http.post("http://localhost:3000/api/brands/createBrands",brand, {headers});
  }
  
}