import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from '@angular/material/sort';
import { UserService } from './services/user.service';
import { SharedModule } from './shared-components/shared.modules';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, IonicModule.forRoot(), AppRoutingModule, 
  HttpClientModule, MatTableModule, MatSortModule, SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
