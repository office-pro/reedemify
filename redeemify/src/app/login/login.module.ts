import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponentRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared-components/shared.modules';
import { LoginService } from './login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, IonicModule, LoginComponentRoutingModule, SharedModule],
  exports: [],
  providers: [LoginService]
})

export class LoginModule {

}