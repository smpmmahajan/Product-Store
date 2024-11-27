import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './state/products.reducer';




@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsListComponent,
    ProductsEditComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule ,
    StoreModule.forFeature('products', ProductReducer),
  ]
})
export class ProductsModule { }
