import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { ImageSliderComponent } from "./image-slider/image-slider.component";
import { FileDragDropComponent } from "./files-drag-and-drop/files-drag-and-drop.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [HeaderComponent, ImageSliderComponent, FileDragDropComponent],
  exports: [HeaderComponent, ImageSliderComponent,FileDragDropComponent]
})

export class SharedModule {

}