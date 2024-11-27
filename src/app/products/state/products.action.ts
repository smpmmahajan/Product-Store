import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { ProductsState } from "./products.reducer";
import { Product } from "../product.model";


export const toggleProductCodeAction = createAction(
    '[Products Page] Toggle Show Product Code',props<{ prodState: ProductsState }>()
);


export const LOAD_PRODUCT='[product page]load product';
export const LOAD_PRODUCT_SUCCESS='[product page]load product success';
export const LOAD_PRODUCT_FAIL='[product page]load product fail';

export const loadProduct=createAction(LOAD_PRODUCT)
export const loadProductSuccess=createAction(LOAD_PRODUCT_SUCCESS,props<{products:Product[]}>())
export const loadProductFail=createAction(LOAD_PRODUCT_FAIL,props<{message:string}>())


// export const ProductsAPIActions = createActionGroup({
//     source: 'Products API',
//     events: {
//         LOAD_PRODUCT: emptyProps(),
//         LOAD_PRODUCT_SUCCESS : props<{ products: Product[] }>(),
//         LOAD_PRODUCT_FAIL: props<{ message: string }>(),
//     //   'Product Added Success': props<{ product: Product }>(),
//     //   'Product Added Fail': props<{ message: string }>(),
//     //   'Product Updated Success': props<{ product: Product }>(),
//     //   'Product Updated Fail': props<{ message: string }>(),
//     //   'Product Deleted Success': props<{ id: number }>(),
//     //   'Product Deleted Fail': props<{ message: string }>(),
//     },
//   });
  