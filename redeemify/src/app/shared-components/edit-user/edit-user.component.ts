import { Component, Inject } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button"
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls:['./edit-user.component.scss'],
})

export class EditUserComponent {

  brandData: Array<any> = [];
  roleData: Array<any> = [];
  brandId: number = 0;

  brandName: string = "";
  roleName: string = "";

  editUserForm: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {}

  onSelectedBrandChange(event: any) {}

  onSelectedRoleChange(event: any) {}
  
}