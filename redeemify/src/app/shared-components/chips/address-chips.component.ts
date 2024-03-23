import { Component, Output, ViewChild,EventEmitter } from '@angular/core';
import { AppUtilityService } from '../services/app-utility.service';
import { AddressService } from 'src/app/address/service/address.service';
import { SearchParamModel } from '../models/search-params.model';
import { AddressDataDirective } from '../directives/address-data.directive';
import { UserContext } from '../services/user-context.service';
import { MatDialog } from '@angular/material/dialog';
import { AddressEditComponent } from 'src/app/address/edit/address-edit.component';

@Component({
  selector: 'address-chips',
  templateUrl: './address-chips.component.html',
  styleUrls: ['./address-chips.component.scss'],
})
export class AddressChipComponent {
  addressData: Array<any> = [];

  @ViewChild('address')
  address: AddressDataDirective | undefined;

  @Output()
  addressChange: EventEmitter<any> = new EventEmitter();

  userId: number = 0;

  constructor(
    private appUtility: AppUtilityService,
    private addressService: AddressService,
    private userContext: UserContext,
    public dialog: MatDialog
  ) {
    this.userContext.brand$.subscribe((data: any) => {
      this.userId = data.user.userId;
    });
  }

  onAddressSelected(address: any, event: Event) {
    this.addressChange.emit({address, isShipping: false});
  }

  onShippingSelected(address: any, event: Event) {
     this.addressChange.emit({address, isShipping: true});
  }

  onEdit(address: any, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.openDialog(address);
  }

  openDialog(address: any) {
    const dialogRef = this.dialog.open(AddressEditComponent,{
      data: address
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete(elem: any, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    if (!!elem.addressId) {
      this.appUtility.presentConfirmationPopup(
        `Do you want to delete ${elem.addressName} ?`,
        'Confirm Delete',
        {
          onConfirm: () => {
            this.addressService
              .deleteAddress(
                new SearchParamModel({ addressIds: [elem.addressId] })
              )
              .subscribe((data) => {
                console.log(elem.addressName + ' ' + 'deleted Successfully');

                (this.address as AddressDataDirective).refreshData(
                  new SearchParamModel({ userId: this.userId })
                );
              });
          },
          buttonName: 'Delete',
          cssClass: 'danger',
        }
      );
    }
  }
}
