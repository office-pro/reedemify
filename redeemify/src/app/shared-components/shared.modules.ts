import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})

export class SharedModule {

}