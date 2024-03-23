import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FileDragDropComponent } from './files-drag-and-drop/files-drag-and-drop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SingleDropdownWithSearch } from './single-dropdown-with-search/single-dropdown-with-search.component';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { DropDownWithSearchComponent } from './dropdown-with-search/dropdown-with-search.component';
import { BrandsDataDirective } from './directives/brands.directive';
import { UsersDataDirective } from './directives/users.directive';
import { RolesDataDirective } from './directives/roles.directive';
import { UsersTableComponent } from './users-table/users-table.component';
import { MatTableModule } from '@angular/material/table';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProductsDataDirective } from './directives/products.directive';
import { BucketsDataDirective } from './directives/buckets.directive';
import { BucketsTableComponent } from './buckets-table/buckets-table.component';
import { ProductCategoryPipe } from './pipes/products-category.pipe';
import { ProductSubCategoryPipe } from './pipes/products-subcategory.pipe';
import { BrandBucketMapperTable } from './brand-bucket-mapper-table/brand-bucket-mapper-table.component';
import { BrandBucketMapperTableEntries } from './brand-bucket-mapper-table/entries/brand-bucket-mapper-table-entries.component';
import { ProductViewerComponent } from './viewer/products-viewer.component';
import { CartIconComponent } from './icon/cart-icon.component';
import { ActiveProductsDataDirective } from './directives/active-products.directive';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { BannerHomeComponent } from './banner/home/banner-home.component';
import { BannerSliderDataDirective } from './directives/banner-slider-data.directive';
import { BannerCardComponent } from './banner/card/banner-card.component';
import { MultiImageSliderComponent } from './multi-image-slider/multi-image-slider.component';
import { DropdownWithSearchModalComponent } from './dropdown-with-search/modal/dropdown-with-search-modal.component';
import { ProductsCategoriesDataDirective } from './directives/product-categories-data.directive';
import { ProductCategoriesDropdownComponent } from './product-categories-dropdown/product-categories-dropdown.component';
import { EditProductCategoryComponent } from './edit-product-category/edit-product-category.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { ProductCategoriesCardSlider } from './product-categories-card-slider/product-categories-card-slider.component';
import { BrandProductsViewer } from './viewer/brand-products/brand-products.component';
import { ClientsProductTableComponent } from './clients-products-table/clients-products-table.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { AddressDataDirective } from './directives/address-data.directive';
import { AddressChipComponent } from './chips/address-chips.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NgImageSliderModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    ButtonModule,
    CarouselModule,
  ],
  declarations: [
    HeaderComponent,
    CardSliderComponent,
    ProductCategoriesCardSlider,
    CartIconComponent,
    ImageSliderComponent,
    FileDragDropComponent,
    SingleDropdownWithSearch,
    DropDownWithSearchComponent,
    BrandsDataDirective,
    UsersDataDirective,
    RolesDataDirective,
    UsersTableComponent,
    EditUserComponent,
    ProductsDataDirective,
    BucketsDataDirective,
    BucketsTableComponent,
    ProductCategoryPipe,
    ProductSubCategoryPipe,
    BrandBucketMapperTable,
    BrandBucketMapperTableEntries,
    ProductViewerComponent,
    ActiveProductsDataDirective,
    BannerSliderComponent,
    BannerHomeComponent,
    BannerSliderDataDirective,
    BannerCardComponent,
    MultiImageSliderComponent,
    DropdownWithSearchModalComponent,
    ProductsCategoriesDataDirective,
    ProductCategoriesDropdownComponent,
    EditProductCategoryComponent,
    BrandProductsViewer,
    ClientsProductTableComponent,
    SearchPipe,
    AddressDataDirective,
    AddressChipComponent
  ],
  exports: [
    HeaderComponent,
    CardSliderComponent,
    ProductCategoriesCardSlider,
    CartIconComponent,
    ImageSliderComponent,
    FileDragDropComponent,
    SingleDropdownWithSearch,
    DropDownWithSearchComponent,
    BrandsDataDirective,
    UsersDataDirective,
    RolesDataDirective,
    UsersTableComponent,
    EditUserComponent,
    ProductsDataDirective,
    BucketsDataDirective,
    BucketsTableComponent,
    ProductCategoryPipe,
    ProductSubCategoryPipe,
    BrandBucketMapperTable,
    BrandBucketMapperTableEntries,
    ProductViewerComponent,
    ActiveProductsDataDirective,
    BannerSliderComponent,
    BannerHomeComponent,
    BannerSliderDataDirective,
    BannerCardComponent,
    MultiImageSliderComponent,
    DropdownWithSearchModalComponent,
    ProductsCategoriesDataDirective,
    ProductCategoriesDropdownComponent,
    EditProductCategoryComponent,
    BrandProductsViewer,
    ClientsProductTableComponent,
    SearchPipe,
    AddressDataDirective,
    AddressChipComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
