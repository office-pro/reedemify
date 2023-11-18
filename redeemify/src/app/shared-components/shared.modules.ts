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
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import { DropDownWithSearchComponent } from "./dropdown-with-search/dropdown-with-search.component";
import { BrandsDataDirective } from "./directives/brands.directive";
import { UsersDataDirective } from "./directives/users.directive";
import { RolesDataDirective } from "./directives/roles.directive";
import { UsersTableComponent } from "./users-table/users-table.component";
import { MatTableModule } from "@angular/material/table";
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule, MatSelectModule, NgxMatSelectSearchModule, ReactiveFormsModule,MatMenuModule, MatTableModule, MatDialogModule, MatButtonModule],
  declarations: [HeaderComponent, ImageSliderComponent, FileDragDropComponent,SingleDropdownWithSearch,DropDownWithSearchComponent, BrandsDataDirective, UsersDataDirective, RolesDataDirective, UsersTableComponent,EditUserComponent],
  exports: [HeaderComponent, ImageSliderComponent,FileDragDropComponent, SingleDropdownWithSearch,DropDownWithSearchComponent,BrandsDataDirective,UsersDataDirective, RolesDataDirective,UsersTableComponent,EditUserComponent],
  providers: []
})

export class SharedModule {

}