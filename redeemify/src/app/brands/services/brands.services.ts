import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, map, of, tap } from "rxjs";
import { PageOptions } from "src/app/shared-components/models/page-options.model";
import { SearchParamModel } from "src/app/shared-components/models/search-params.model";
import { AppUtilityService } from "src/app/shared-components/services/app-utility.service";

@Injectable({
  providedIn: "root"
})
export class BrandService {

  private brands: Array<any> = [];
  private pageOptions = new PageOptions();
  constructor(private http: HttpClient,@Inject(AppUtilityService) private appUtility?: AppUtilityService) {}

  getAllBrands(fetchFromServer = false, options = {page: this.pageOptions?.offset, limit: this.pageOptions?.limit }): Observable<any> {
    if(!fetchFromServer && this.brands.length > 0) {
      return of([...this.brands]);
    }
    return this.http.get(`http://localhost:3000/api/brands?offset=${options.page * options.limit}&limit=${options.limit}`)
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

  fetchBannerByBrandId(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.http.get("http://localhost:3000/api/brands/"+searchParams?.["brandId"]+"/banner")
  }

  deleteBannerByBrandId(searchParams: SearchParamModel = new SearchParamModel()) {
    return this.http.delete("http://localhost:3000/api/brands/"+searchParams?.["bannerId"]+"/banner")
  }

  createBrands(brand: any) {
    let headers = new HttpHeaders();
    headers.append('Accept', 'multipart/form-data;application/json');
    return this.http.post("http://localhost:3000/api/brands/createBrands",brand, {headers});
  }
  
}