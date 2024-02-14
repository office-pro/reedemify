import { Component, EventEmitter, Input, Output, SimpleChange } from "@angular/core";
import { FormGroup} from "@angular/forms";
import { FormModel } from "src/app/shared-components/forms-model/address-form.model";
import { Address } from "src/app/shared-components/models/address/address.model";

@Component({
  selector: "address-home",
  templateUrl: "./address-home.component.html",
  styleUrls: ['./address-home.component.scss']
})

export class AddressHomeComponent {

  @Input()
  addressForm: FormGroup | any;

  @Output()
  formChange: EventEmitter<FormGroup> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: any) {
    if(changes.addressForm.currentValue) {
      this.addressForm = changes.addressForm.currentValue;
    } else {
      this.addressForm = this.addNewAddress();
    }

  }

  ngOnInit() {
    if(!this.addressForm) {
      this.addressForm = this.addNewAddress();
    }
  }

  addNewAddress() {
    let form = new FormModel(new Address()).implementFormBuilder()
    return form;
  }

  onSubmit(form: FormGroup = this.addressForm) {
    this.formChange.emit(form);
  }

}