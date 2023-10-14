import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { ImageSliderComponent } from "./image-slider/image-slider.component";
import { FileDragDropComponent } from "./files-drag-and-drop/files-drag-and-drop.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatSelectModule} from "@angular/material/select"
import {NgxMatSelectSearchModule} from "ngx-mat-select-search"
import { SingleDropdownWithSearch } from "./single-dropdown-with-search/single-dropdown-with-search.component";

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule, MatSelectModule, NgxMatSelectSearchModule, ReactiveFormsModule],
  declarations: [HeaderComponent, ImageSliderComponent, FileDragDropComponent,SingleDropdownWithSearch],
  exports: [HeaderComponent, ImageSliderComponent,FileDragDropComponent, SingleDropdownWithSearch]
})

export class SharedModule {

}