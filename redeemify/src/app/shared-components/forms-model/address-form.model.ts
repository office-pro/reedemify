import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Address } from "../models/address/address.model";


export class FormModel<T>{

  model: T | undefined;
  private keys: Array<keyof T> = [];

  constructor(modelObj: T) {
    this.model = modelObj;
    this.keys = (Object.keys(modelObj as Object)) as Array<keyof T>;
  }
 
  implementFormBuilder(): FormGroup {
    let formObj: any = {};
    this.keys.forEach((key: any) => {
      formObj[key] = new FormControl("", [Validators.required])
    });

    let formGroup = new FormGroup(formObj);
    return formGroup;
  }
}
