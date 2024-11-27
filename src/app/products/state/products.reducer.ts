import {  createReducer, on } from '@ngrx/store';
import { loadProduct, loadProductFail, loadProductSuccess, toggleProductCodeAction } from './products.action';
import { Product } from '../product.model';


export interface ProductsState {
  showProductCode: boolean;
  loading: boolean;
  errorMessage: string;
  products: Product[];
}

const intitialState: ProductsState = {
  showProductCode: true,
  loading: false,
  errorMessage: '',
  products: [],
};

// export const productsReducer = createReducer(
//   intitialState,
//   on(createAction('[Products Page] Toggle Show Product Code'), (state) => (
//   {
//     ...state,    
//     showProductCode: !state.showProductCode,
//   }
// ))
// );


const _productReducer = createReducer(intitialState,
  on(loadProduct, (state) => ({
    
    ...state,
    loading: true,
    errorMessage: '',
    products: [],
  })),
  on(loadProductSuccess, (state, { products }) => (
    //console.log("productList",productList);
    {
    ...state,
    loading: false,
    products,
  })),
  on(loadProductFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
)

export function ProductReducer(state: any, action: any) {
  console.log("ProductReducer state",state);
  console.log("ProductReducer action",action);
  return _productReducer(state, action);
}

