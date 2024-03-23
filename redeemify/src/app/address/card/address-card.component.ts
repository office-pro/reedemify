import { Component, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { AddressHomeComponent } from "src/app/address/home/address-home.component";
import { UserService } from "src/app/services/user.service";
import { AppUtilityService } from "src/app/shared-components/services/app-utility.service";
import { UserContext } from "src/app/shared-components/services/user-context.service";
import { AddressEditComponent } from "../edit/address-edit.component";


@Component({
  selector: "address-card",
  templateUrl: "./address-card.component.html",
  styleUrls: ['./address-card.component.scss']
})

export class AddressCardComponent {
   isAddressSameAsShippingAddress: boolean = false;

  @ViewChild("address")
  public address: AddressHomeComponent | undefined;

  @ViewChild("shippingAddress")
  public shippingAddress: AddressHomeComponent | undefined;

  form: FormGroup | undefined;
  addressForm: FormGroup | undefined;

   constructor(private appUtility: AppUtilityService, private userContext: UserContext,public dialog: MatDialog) {
    // this.currentUser$ = this.userContext.brand$.subscribe((data: any) => {
    //   this.currentUser = data;
    //   this.brandId = data.brandId;
    // })
  }

  changeForm(state: boolean) {
    this.address?.onSubmit()
    this.form = state ? this.addressForm : undefined;
  }

  save(obj: any) {
    this.shippingAddress?.onSubmit();
    console.log(this.addressForm?.value);
    console.log(this.form?.value);
  }

  addNewAddress() {

  }

  
  openDialog() {
    const dialogRef = this.dialog.open(AddressEditComponent,{
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  onAdd() {
    this.openDialog();
  }

  onAddressChange(address: any) {
    if(!address.isShipping) {
      this.address?.addressForm?.patchValue(address.address);
    } else {
      if(!this.isAddressSameAsShippingAddress) {
        this.shippingAddress?.addressForm?.patchValue(address.address);
      } else {
        this.changeForm(true)
      }
    }
  }

}