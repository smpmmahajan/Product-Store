import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductsState } from '../products/state/products.reducer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  constructor(private store: Store<ProductsState>) 
  {
    debugger;
   // this.showProductCode = this.store.pipe(select)
//     this.cart$= this.store.pipe(select(selectProductsShowProductCode));
// this.cart$.subscribe({
//         next:(res: ProductsState)=>{
//           console.log("showProductCode in home constructor",res.showProductCode);
//         }
  }
}
