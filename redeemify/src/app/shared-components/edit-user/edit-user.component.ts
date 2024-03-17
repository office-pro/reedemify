import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls:['./edit-user.component.scss'],
})

export class EditUserComponent implements OnInit {
  brandData: Array<any> = [];
  roleData: Array<any> = [];
  brandId: number = 0;
  brandName: string = "";
  roleName: string = "";

  editUserForm!: FormGroup; // Define the FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the FormGroup
    this.editUserForm = this.fb.group({
      firstName: [this.data.firstName, Validators.required],
      lastName: [this.data.lastName, Validators.required],
      brandId: [this.data.brandId, Validators.required],
      roleId: [this.data.roleId, Validators.required],
      mobileNo: [this.data.mobileNo, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]]
    });
  }


  updateData(){
    console.log(`updated data ${this.data}`);
  }

  onSelectedBrandChange(event: any) {
    // Implement your logic for brand change if needed
  }

  onSelectedRoleChange(event: any) {
    // Implement your logic for role change if needed
  }
}
