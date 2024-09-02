import productReducer from './slices/productSlice'

import cartItemReducer from './slices/cartItemSlice'

import wishListReducer, { wishListAdd, wishListRemove } from './slices/wishListSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartItemReducer,
    wishList: wishListReducer,
  },
})
