import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";


// export const selectProductsState =
// createFeatureSelector<ProductsState>('products');

// export const selectProductsShowProductCode = createSelector(
// selectProductsState,
// ({ showProductCode }) => {
//     console.log("showProductCode selectyor", showProductCode)
// return selectProductsState;    
// }
// );

const getProductState = createFeatureSelector<ProductsState>('products');

export const getProductList = createSelector(getProductState, (state) => {
    return state.products;
});


export const selectProducts = createSelector(
    getProductState,
    ({ products }) => products
  );