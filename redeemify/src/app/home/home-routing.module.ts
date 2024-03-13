import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomeProductsComponent } from './products/home-products.component';
import { HomeCheckoutComponent } from './checkout/home-checkout.component';
import { BrandProductComponent } from './products/brand-products/brand-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: HomeProductsComponent
      },
      {
        path: 'brand-products',
        component: BrandProductComponent,
      }
    ]
  },
  {
    path: 'checkout',
    component: HomeCheckoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
