import {Component, ViewChild} from "@angular/core";
import { ProductService } from "../services/products.services";
import { IonModal } from "@ionic/angular";
import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ExcelService } from "src/app/shared-components/services/excel-helper.service";
import { Router } from "@angular/router";
import { ProductUtils } from "../utils/product.utils";

@Component({
  selector: 'products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})

export class ProductsHomeComponent {
  
  products: Array<any> = []
  productCategories: Array<any> = [];
  subProductCategories: Array<any> = []
  productImages: Array<any> = []
  productForm: FormGroup;
  selectedProductCategory: any;
  selectedProductSubCategory: any;
  selectedProductImage: any;
  productUtils = ProductUtils;

  files: Array<any> = [];

  @ViewChild(IonModal) modal: IonModal | any;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = "";

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  
  constructor(private productService: ProductService, private fb: FormBuilder, public router: Router) {
    this.productForm = this.fb.group({
      productName: ["",[Validators.required]],
      productPrice: [0, [Validators.required]],
      productCategoryId: [0,[Validators.required]],
      productSubCategoryId: [0, [Validators.required]],
      productImagesUrlContainerId:[0,[]],
      productDesc: ["",[]]
    })
  }

  createForm() {
    console.log(this.productForm.value)
    let obj = {...this.productForm.value,productCategoryId:this.selectedProductCategory.productCategoryId}
    
    
    this.productService.createProducts([obj])
                       .subscribe((data: any) => {
                          console.log(data)
                       })

  }

  uploadImages() {
    this.router.navigateByUrl("/products/upload-images");
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    })

    this.productService.getProductCategories().subscribe((pc: any) => {
      this.productCategories = pc;
    })

    this.productService.getProductImages().subscribe((pc: any) => {
      this.productImages = pc;
    })
  }

  onExcelUpload(inp: any) {
    let files: any = inp.files;

    ExcelService.readExcel(files,2).then((data: any) => {
      console.log("excel -data ",data)

      this.productService.createProducts(data)
                       .subscribe((cretad: any) => {
                          console.log("products created")
                       })
    })
  }

  ngDoCheck() {
    console.log("files - ",this.files)
  }


}
