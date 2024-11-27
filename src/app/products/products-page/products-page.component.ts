import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { sumProducts } from 'src/app/utils/sum-products';
import { select, Store } from '@ngrx/store';
import { ProductsState } from '../state/products.reducer';
import { loadProduct, toggleProductCodeAction } from '../state/products.action';
import { Observable } from 'rxjs';
import {  selectProducts } from '../state/products.selectors';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
//  products: Product[] = [];
  total = 0;
  loading = true;
  showProductCode = false;
  errorMessage = '';
  products!:Product[];
 // prodState: ProductsState = {showProductCode:true}
  cart$:any //Observable<ProductsState>;

  constructor(private productsService: ProductsService,private store: Store) 
  {
    debugger
   // this.showProductCode = this.store.pipe(select)
 

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    debugger;
    this.store.dispatch(loadProduct());
    this.store.select(selectProducts).subscribe(item => {
      debugger;
      console.log("this.productList",this.products);
      this.products = item;    
    });
    // this.productsService.getAll().subscribe({
    //   next: (products) => {
    //     this.products = products;
    //     this.total = sumProducts(products);
    //     this.loading = false;
    //   },
    //   error: (error) => (this.errorMessage = error),
    // });
  }

  toggleShowProductCode() {
    debugger;
    this.showProductCode = !this.showProductCode;
    // let prodState: ProductsState = {
    //   showProductCode: this.showProductCode,
    // };
    // prodState = {...this.prodState}
    // this.store.dispatch(toggleProductCodeAction(
    //   {prodState}));
  }
  // removeFromCart(product) {
  //   this.store.dispatch(CartActions.removeItemFromCart({product: product}))
  // }

}