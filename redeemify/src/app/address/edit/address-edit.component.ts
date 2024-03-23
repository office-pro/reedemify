import { Component, EventEmitter, Inject, Input, Output, SimpleChange, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup} from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormModel } from "src/app/shared-components/forms-model/address-form.model";
import { Address } from "src/app/shared-components/models/address/address.model";
import { AddressHomeComponent } from "../home/address-home.component";
import { AddressService } from "../service/address.service";
import { SearchParamModel } from "src/app/shared-components/models/search-params.model";
import { UserContext } from "src/app/shared-components/services/user-context.service";

@Component({
  selector: "address-edit",
  templateUrl: "./address-edit.component.html",
  styleUrls: ['./address-edit.component.scss']
})

export class AddressEditComponent {

  @Input()
  addressForm: FormGroup | any;

  @Output()
  formChange: EventEmitter<FormGroup> = new EventEmitter();

  @ViewChild("address")
  address: AddressHomeComponent | undefined;

  onClose = false;
  userId: number = 0;

  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private addressService: AddressService, private userContext: UserContext, private fb: FormBuilder) {
    this.userContext.brand$.subscribe((data: any) => {
        this.userId = data.user.userId
    })
  }

  ngOnChanges(changes: any) {
   

  }

  ngOnInit() {
     if(!!this.data) {
      this.addressForm = (new FormModel(new Address()).implementFormBuilder()) as FormGroup
      (this.addressForm as FormGroup).patchValue(this.data)
     }
  }

  addNewAddress() {
    
  }

  onSubmit(form: FormGroup = this.addressForm) {
    this.formChange.emit(form);
  }

  onSave() {
    const addressPayload: Address = (this.address?.addressForm as FormGroup).value as Address;
    
    let searchParams = new SearchParamModel({
      address: [{...addressPayload, userId: this.userId}]
    })

    this.addressService.addAddress(searchParams).subscribe((data: any) => {
      console.log("data - ", data);
    })
    
  }

}