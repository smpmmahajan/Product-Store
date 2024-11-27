import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "../products.service";
import { Injectable } from "@angular/core";
import { loadProduct, loadProductFail, loadProductSuccess } from "./products.action";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions,  private productsService: ProductsService,) {

    }
//     _loadProducts = createEffect(() =>
        
//         this.actin$.pipe(
//             ofType(loadProduct),
//             mergeMap((action) => {
//                 return this.productsService.getAll().pipe(
//                     map((data) => {
//                         debugger;
//                         console.log("data effect",data);
                        
//                         return loadProductSuccess({ productList: data })
//                     }),
//                     catchError((_error) => of(loadProductFail({ errorMessage: _error.message })))
//                 )
//             })
//         )
//     )
// }

loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProduct),
      exhaustMap(() =>
        this.productsService.getAll().pipe(
          map((products) =>
            loadProductSuccess({ products })
          ),
          catchError((error) =>
            of(loadProductFail({ message: error }))
          )
        )
      )
    )
  );
}
