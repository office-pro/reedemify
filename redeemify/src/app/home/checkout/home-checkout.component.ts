import { Component, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AddressHomeComponent } from "src/app/address/home/address-home.component";
import { RolesRestrictorService } from "src/app/services/roles-restrictor.service";

@Component({
  selector:'home-checkout',
  templateUrl: './home-checkout.component.html',
  styleUrls: ['./home-checkout.component.scss']
})

export class HomeCheckoutComponent {

    isAddressSameAsShippingAddress: boolean = false;

  @ViewChild("address")
  address: AddressHomeComponent | undefined;

  form: FormGroup | undefined;
  addressForm: FormGroup | undefined;

  constructor(public rolesRestrictor: RolesRestrictorService) {

  }

  changeForm(state: boolean) {
    this.address?.onSubmit()
    this.form = state ? this.addressForm : undefined;
  }



}