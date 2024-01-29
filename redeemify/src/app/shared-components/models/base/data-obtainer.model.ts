import { Observable, of } from "rxjs";
import { SearchParamModel } from "../search-params.model";

export abstract class DataObtainer {
  pageLoading: boolean = false;

  refreshData(searchParams: SearchParamModel = new SearchParamModel()) {
    this.onBeforeUpdateData(searchParams);
    this.pageLoading = true;
    this.getDataObservable(searchParams).subscribe((data: any) => {
      this.pageLoading = false;
      this.onAfterUpdateData(data);
    }, (error) => {
      this.onErrorUpdateData(error)
    }, () => {
      this.pageLoading = false;
      this.onCompletion();
    })
  }

  jsonStringify(json: any = {}) {
    return JSON.stringify(json)
  }

  protected onBeforeUpdateData(searchParams: SearchParamModel) {}
  protected onAfterUpdateData(data: any) {}
  protected onErrorUpdateData(data: any) {}
  protected onCompletion() {}
  protected abstract getDataObservable(searchParams?: SearchParamModel): Observable<any>;
}