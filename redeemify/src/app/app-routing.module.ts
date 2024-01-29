import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginResolver } from './resolvers/login-resolver.service';
import { SuperAdminRoleResolver } from './resolvers/super-admin-role.resolver';
import { AdminRoleResolver } from './resolvers/admin-role.resolver';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [LoginResolver]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule),
  },
  {
    path: 'brands',
    loadChildren: () => import('./brands/brands.module').then( m => m.BrandsModule),
    canLoad: [LoginResolver,SuperAdminRoleResolver]
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    canLoad: [LoginResolver]
  },
  {
    path: 'productbuckets',
    loadChildren: () => import('./product-buckets/product-buckets.module').then(m => m.ProductBucketsModule),
    canLoad: [LoginResolver]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canLoad: [LoginResolver,AdminRoleResolver]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
