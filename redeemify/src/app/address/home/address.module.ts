import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddressHomeComponent } from "./address-home.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule ],
  exports: [AddressHomeComponent],
  declarations: [AddressHomeComponent]
})

export class AddressModule {}
