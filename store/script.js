import {combineReducers, createStore} from 'redux'

import productReducer from '../slices/productSlice'

import cartItemReducer, { cartAddItem, cartDecreaseBy, cartIncreasedBy, cartRemoveItem } from '../slices/cartItemSlice'

import wishListReducer, { wishListAdd, wishListRemove } from '../slices/wishListSlice'

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartItemReducer,
  wishList: wishListReducer,
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
