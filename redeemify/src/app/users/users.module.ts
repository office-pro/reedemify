import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared-components/shared.modules";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar"
import { MatSelectModule } from "@angular/material/select";
import { UsersHomeComponent } from "./users-home/users-home.component";
import { CreateUsersComponent } from "./create-users/create-users.component";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
  declarations: [UsersHomeComponent, CreateUsersComponent],
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, SharedModule, MatPaginatorModule, MatToolbarModule, ReactiveFormsModule, MatSelectModule, UsersRoutingModule],
  exports: [],
  providers: []
})

export class UsersModule{}