import { Component } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { ProductService } from "../../shared-components/services/products.services";
import { ExcelService } from "src/app/shared-components/services/excel-helper.service";
import { Router } from "@angular/router";
import { ProductUtils } from "../utils/product.utils";

@Component({
  selector: 'create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['create-products.component.scss']
})

export class CreateProductComponent {

  createProductForm: any;
  productCategories: Array<any> = [];
  subProductCategories: Array<any> = []
  productImages: Array<any> = []
  selectedProductCategory: any = [];
  selectedProductSubCategory: any = [];
  selectedProductImage: any = [];
  productUtils = ProductUtils

  constructor(private fb: FormBuilder, private productService: ProductService, public router: Router) {
    this.createProductForm = this.fb.group({
      // Other form controls
      productEntries: new FormArray([]),
    });

  }

  ngOnInit() {

    this.productService.getProductCategories().subscribe((pc: any) => {
      this.productCategories = pc;
    })

    this.productService.getProductImages().subscribe((pc: any) => {
      this.productImages = pc;
    })
  }

  removeProductEntries(index: number) {
    this.productEntriesArray.removeAt(index);
  }

  addProductEntries() {
    let fg = this.fb.group({
      productName: ["",[Validators.required]],
      productPrice: [null, [Validators.required]],
      productCategoryId: [null,[Validators.required]],
      productSubCategoryId: [null, [Validators.required]],
      productImagesUrlContainerId:[null,[]],
      productDesc: ["",[]]
    });

    this.productEntriesArray.push(fg);
  }

  accordionGroupChange(event: any) {

  }

  get productEntriesArray() {
    return this.createProductForm.get('productEntries') as FormArray;
  }

  submitForm(form: any) {
    console.log("form - ",this.productEntriesArray.controls);
    let controls: any = this.productEntriesArray.controls;
    if(controls.length > 0) {
      let productValues = controls.map((control: any) => control.value);
      this.productService.createProducts(productValues)
                          .subscribe((product: any) => {
                            this.resetData();
                            alert("products created");
                          });
    }

  }

  onProductCategoryValueChange(productCategoryId: number,productSubCategoryId: number,productImagesUrlContainerId: number, index: number ) {
    this.filterProductCategory(productCategoryId,index);
    this.filterProductSubCategory(productSubCategoryId, index);
    this.filterProductImages(productImagesUrlContainerId, index);
  }

  private resetData() {

    this.selectedProductCategory = [];
    this.selectedProductSubCategory = [];
    this.selectedProductImage = [];
    this.productEntriesArray.clear();

  }

  filterProductCategory(productCategoryId: number,index: number) {
    this.selectedProductCategory[index]  = this.productCategories.filter((pc: any) => pc.productCategoryId == productCategoryId)[0];
    return this.selectedProductCategory[index];
  }

  filterProductSubCategory(productSubCategoryId: number,index: number) {
    if(!!this.selectedProductCategory[index]) {
      let subCategories: any = [];
      subCategories = this.selectedProductCategory[index].productSubCategories;
      if(subCategories.length > 0) {
        let subCategory = subCategories.filter((psc: any) => psc.productSubCategoryId == productSubCategoryId)[0];
        this.selectedProductSubCategory[index]  = subCategory;
      }
    }
  }

  filterProductImages(productImagesUrlContainerId: number, index: number) {
    if(!!(this.productImages?.length > 0)) {
      let productImage = this.productImages.filter((pi: any) => pi.productImagesUrlContainerId == productImagesUrlContainerId)[0];
      this.selectedProductImage[index] = productImage;
    }
  }

  onExcelUpload(inp: any) {
    let files: any = inp.files;

    ExcelService.readExcel(files,2).then((data: any) => {
      this.initializeFormArray(data);
    })
  }

  private initializeFormArray(excelDataArr: Array<any>) {
    excelDataArr.forEach((product: any, index: number) => {
      this.onProductCategoryValueChange(product.productCategoryId, product.productSubCategoryId, product.productImagesUrlContainerId,this.productEntriesArray.length)
      const createProductFormGroup = this.fb.group({...product});
      this.productEntriesArray.push(createProductFormGroup);
    });
  }
}