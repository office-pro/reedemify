export class UrlUtils {
  static convertQueryParamsToObject() {
    let queryParams: any = {};
    let hash = location.hash;
    let plainHash = location.hash.split("?")[0];
    let stringQueryParams = location.hash.split("?")[1];

    let splittedStringQueryParams = stringQueryParams?.split("&");

    if(splittedStringQueryParams?.length > 0) {
      splittedStringQueryParams.forEach((val: string) => {
        let keyValArr: Array<any> = val.split("=");
        queryParams[keyValArr[0]] = keyValArr[1]
      })
    }
    return queryParams;
  }

  static convertObjectToQueryParams(obj: any = {}) {
    if(Object.keys(obj)?.length > 0) {
      let keys = Object.keys(obj);
      let values = Object.values(obj);
      let plainHash = location.hash.split("?")[0];
      let finalOp=`${plainHash}?`;

      if(keys.length >= values.length) {
        finalOp=`${plainHash}?`;
        keys.forEach((key: string,index: number, arr: Array<any>) => {
          if(!!values[index] || values[index] != null || values[index] != undefined || values[index] != "") {
            finalOp += `${key}=${values[index]}`;

            if(index < (arr.length - 1) ) {
              finalOp += "&"
            }
          }
        })
      }

      

      location.hash = finalOp;
    }
  }

}