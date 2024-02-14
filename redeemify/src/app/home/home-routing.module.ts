import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomeProductsComponent } from './products/home-products.component';
import { HomeCheckoutComponent } from './checkout/home-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'products',
    component: HomeProductsComponent,
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
