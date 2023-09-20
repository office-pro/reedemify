import {Component, ViewChild} from "@angular/core";
import { ProductService } from "../services/products.services";
import { IonModal } from "@ionic/angular";
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})

export class ProductsHomeComponent {
  
  products: Array<any> = []

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
  
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = [...data,...data,...data,...data];
      console.log(this.products);
    })
  }

  ngDoCheck() {
    console.log("files - ",this.files)
  }


}
