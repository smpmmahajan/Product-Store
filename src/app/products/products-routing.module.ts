import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent
  },
  {
    path: ':id',
    component: ProductAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
