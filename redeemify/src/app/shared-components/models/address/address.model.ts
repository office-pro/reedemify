import { BaseModel } from "../base/base-model";

export class Address extends BaseModel<Address>{
  address: string = '';
  addressName: string = '';
  city: string = '';
  state: string = '';
  pincode: string = '';

  constructor() {
    super();
  }

  get fullAddress(): string {
    return this.address + this.isCityPresent
      ? ',' + this.city + '' + this.isPincodePresent
        ? ' - ' + this.pincode
        : ''
      : '' + this.isStatePresent
      ? ',' + this.state
      : '';
  }

  get isCityPresent() {
    return !!this.city;
  }

  get isStatePresent() {
    return !!this.state;
  }

  get isAddressPresent() {
    return !!this.address;
  }

  get isPincodePresent() {
    return !!this.pincode;
  }

  get isAddressNamePresent() {
    return !!this.addressName;
  }

  
}
