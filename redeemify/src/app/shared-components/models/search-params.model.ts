export class SearchParamModel {
  [key: string]: any;

  constructor(jsonObj: any = {}) {
    Object.assign(this,jsonObj);
  }
}