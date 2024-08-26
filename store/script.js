import productReducer from './slices/productSlice'

import cartItemReducer from './slices/cartItemSlice'

import wishListReducer, { wishListAdd, wishListRemove } from './slices/wishListSlice'
import { configureStore } from '@reduxjs/toolkit'
import { logger } from './middlewares/logger'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartItemReducer,
    wishList: wishListReducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
