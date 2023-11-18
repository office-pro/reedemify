import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BrandsHomeComponent } from './brands-home/brands-home.component';
import { BrandDetailsComponent } from './brands-details/brands-details.component';
import { SuperAdminRoleResolver } from '../resolvers/super-admin-role.resolver';

const routes: Routes = [
  {
    path: '',
    component: BrandsHomeComponent,
    canActivate:[SuperAdminRoleResolver]
  },
  {
    path: ':brandId',
    component: BrandDetailsComponent,
    canActivate: [SuperAdminRoleResolver]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
