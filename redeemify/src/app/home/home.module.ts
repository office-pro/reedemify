import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from '@angular/material/sort';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared-components/shared.modules';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatTableModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
