import { Component } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { ExcelService } from "src/app/shared-components/services/excel-helper.service";
import { Router } from "@angular/router";
import { ProductService } from "src/app/shared-components/services/products.services";
import { ProductUtils } from "src/app/products/utils/product.utils";
import { UserContext } from "src/app/shared-components/services/user-context.service";
import { UserService } from "src/app/services/user.service";
import { SearchParamModel } from "src/app/shared-components/models/search-params.model";

@Component({
  selector: 'create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['create-users.component.scss']
})

export class CreateUsersComponent {

  createUserForm: any;
  brandData: Array<any> = [];
  brandId: number = 0;
  roleData: Array<any> = [];
  brandName: string = "";
  roleNames: Array<string> = [];
  productUtils = ProductUtils

  constructor(private fb: FormBuilder, public router: Router,private userContext: UserContext, private userService: UserService) {
    this.createUserForm = this.fb.group({
      // Other form controls
      userEntries: new FormArray([]),
    });


  }

  ngOnInit() {
    this.userContext.brand$.subscribe((brand: any) => {
      this.brandName = brand.brandName;
      this.brandId = brand.brandId;
    })
    
    setTimeout(() => {
      this.addUserEntries();
    })
  }

  removeProductEntries(index: number) {
    this.userEntriesArray.removeAt(index);
  }

  addUserEntries() {
    let fg = this.fb.group({
      firstName: ["",[Validators.required]],
      lastName: ["", [Validators.required]],
      brandId: [this.brandId,[Validators.required]],
      roleId: [null, [Validators.required]],
      mobileNo:[null,[Validators.required]],
      email: ["",[Validators.required]],
      points: [0,[Validators.required]]
    });

    this.userEntriesArray.push(fg);
  }

  accordionGroupChange(event: any) {}

  get userEntriesArray() {
    return this.createUserForm.get('userEntries') as FormArray;
  }

  onSelectedBrandChange(event: any,i: number) {
    this.brandName = event.brandName;
    this.userEntriesArray.controls[i].get("brandId")?.setValue(event.brandId);
  }

  onSelectedRoleChange(event: any,i: number) {
    console.log(event);
    this.userEntriesArray.controls[i].get("roleId")?.setValue(event.roleId);
  }

  submitForm(form: any) {
    console.log("form - ",this.userEntriesArray.controls);
    let controls: any = this.userEntriesArray.controls;
    if(controls.length > 0) {
      let userValues = controls.map((control: any) => control.value);
      // this.productService.createProducts(productValues)
      //                     .subscribe((product: any) => {
      //                       this.resetData();
      //                       alert("products created");
      //                     });

      let searchParams = new SearchParamModel();
      searchParams["users"] = userValues;

      this.userService.createUsers(searchParams)
                      .subscribe((product: any) => {
                        this.resetData();
                        alert("users created");
                      });

    }

  }

  onProductCategoryValueChange(productCategoryId: number,productSubCategoryId: number,productImagesUrlContainerId: number, index: number ) {
    // this.filterProductCategory(productCategoryId,index);
    // this.filterProductSubCategory(productSubCategoryId, index);
    // this.filterProductImages(productImagesUrlContainerId, index);
  }

  private resetData() {
    this.userEntriesArray.clear();
  }

  // filterProductCategory(productCategoryId: number,index: number) {
  //   this.selectedProductCategory[index]  = this.productCategories.filter((pc: any) => pc.productCategoryId == productCategoryId)[0];
  //   return this.selectedProductCategory[index];
  // }

  // filterProductSubCategory(productSubCategoryId: number,index: number) {
  //   if(!!this.selectedProductCategory[index]) {
  //     let subCategories: any = [];
  //     subCategories = this.selectedProductCategory[index].productSubCategories;
  //     if(subCategories.length > 0) {
  //       let subCategory = subCategories.filter((psc: any) => psc.productSubCategoryId == productSubCategoryId)[0];
  //       this.selectedProductSubCategory[index]  = subCategory;
  //     }
  //   }
  // }

  // filterProductImages(productImagesUrlContainerId: number, index: number) {
  //   if(!!(this.productImages?.length > 0)) {
  //     let productImage = this.productImages.filter((pi: any) => pi.productImagesUrlContainerId == productImagesUrlContainerId)[0];
  //     this.selectedProductImage[index] = productImage;
  //   }
  // }

  onExcelUpload(inp: any) {
    let files: any = inp.files;

    ExcelService.readExcel(files,2).then((data: any) => {
      this.initializeFormArray(data);
    })
  }

  private initializeFormArray(excelDataArr: Array<any>) {
    excelDataArr.forEach((user: any, index: number) => {
      const createUserFormGroup = this.fb.group({...user});
      this.roleNames[this.userEntriesArray.length] = this.roleData.filter((role: any) => role.roleId == parseInt(user.roleId))[0].roleName;
      this.userEntriesArray.push(createUserFormGroup);
    });
  }
  
}