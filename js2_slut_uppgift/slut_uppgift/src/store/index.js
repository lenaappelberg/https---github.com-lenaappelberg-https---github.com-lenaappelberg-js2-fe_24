import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productSlice";
import shoppingCartSlice from "./features/shoppingCart/shoppingCartSlice";


const store=configureStore({
    reducer:{
        productList:productsReducer,
        shoppingCart:shoppingCartSlice,
    },
})
export default store