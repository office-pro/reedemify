import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BrandsHomeComponent } from './brands-home/brands-home.component';
import { BrandDetailsComponent } from './brands-details/brands-details.component';

const routes: Routes = [
  {
    path: '',
    component: BrandsHomeComponent
  },
  {
    path: ':brandId',
    component: BrandDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
