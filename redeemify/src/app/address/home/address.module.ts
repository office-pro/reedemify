import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressHomeComponent } from './address-home.component';
import { IonicModule } from '@ionic/angular';
import { AddressCardComponent } from '../card/address-card.component';
import { AddressEditComponent } from '../edit/address-edit.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared-components/shared.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [AddressHomeComponent, AddressCardComponent, AddressEditComponent],
  declarations: [
    AddressHomeComponent,
    AddressCardComponent,
    AddressEditComponent,
  ],
})
export class AddressModule {}
