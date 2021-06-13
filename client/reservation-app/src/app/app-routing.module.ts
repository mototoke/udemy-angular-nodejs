import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
// import { ProductListComponent } from './product/product-listings/product-listings.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
