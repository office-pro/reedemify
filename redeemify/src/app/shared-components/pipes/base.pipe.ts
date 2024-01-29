import { Pipe, PipeTransform } from "@angular/core";
import { DataObtainer } from "../models/base/data-obtainer.model";
import { Observable } from "rxjs";
import { SearchParamModel } from "../models/search-params.model";
import { BasePipeModel } from "./base-pipe.model";

export class BasePipe extends DataObtainer {
  

  private data: any;

  constructor(obj: BasePipeModel) {
    super();
    // this.refreshData();
  }

  protected override getDataObservable(searchParams: SearchParamModel): Observable<any> {
    throw new Error("Method not implemented.");
  }
  
  
}