import { ChangeDetectorRef, Pipe, PipeTransform } from "@angular/core";
import { DataObtainer } from "../models/base/data-obtainer.model";
import { Observable } from "rxjs";
import { SearchParamModel } from "../models/search-params.model";
import { BasePipeModel } from "./base-pipe.model";
import { ProductService } from "src/app/shared-components/services/products.services";
import { UserContext } from "../services/user-context.service";

@Pipe({
  name: 'productCategory'
})

export class ProductCategoryPipe implements PipeTransform {
  
  private data: Array<any> = [];

  async fetchData() {
    let searchParams = new SearchParamModel();
    searchParams['getProductCategories'] = true;
    await this.productService.getProductCategories(searchParams).toPromise().then((data: any) => {
      if(data) {
        this.userContext.setProductCategories(data);
        this.cd.detectChanges()
      }
    })
  }

  constructor(private userContext: UserContext, private productService: ProductService, private cd: ChangeDetectorRef) {
    this.userContext.getProductCategories().subscribe(async (data: any) => {
      if(data?.length == 0) {
        await this.fetchData();
      } else {
        this.data = data;
      }

    })
  }

  

  transform(valueLiteral: any, ...args: any[]) {
    let value = this.data.filter((data: any) => data.productCategoryId == valueLiteral )
    return !!value && !!value[0] ? value[0].productCategoryName : valueLiteral;
  }


}