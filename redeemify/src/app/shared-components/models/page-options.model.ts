import { UrlUtils } from "src/app/utils/url.utils";

export class PageOptions {
  limit: number = 8;
  offset: number = 0;
  total: number = 0;

  constructor(options: {limit: number, offset: number, total: number} | any = {}) {
    if(Object.keys(options).length > 0) {
      this.limit = options.limit;
      this.offset = options.offset;
      this.total = options.total;
    }
    this.setQueryParams();
  }

  setParams(limit: number = 0, offset: number = 0, total: number = 0) {
    this.limit = limit;
    this.offset = offset;
    this.total = total;
  }

  onPageChange(event: any) {
    this.offset = (event.pageIndex);
    this.setQueryParams();
  }

  setQueryParams() {
    let urlObj: any = UrlUtils.convertQueryParamsToObject();

    UrlUtils.convertObjectToQueryParams({
      ...urlObj,
      page: this.offset * this.limit,
      limit: this.limit
    })
  }

}