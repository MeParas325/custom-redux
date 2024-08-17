import {combineReducers, createStore} from 'redux'

import productReducer from './reducers/productReducer'

import cartItemReducer from './reducers/cartItemReducer'
import { CART_DECREASE_BY, CART_INCREASE_BY, CART_ADD_ITEM, CART_REMOVE_ITEM } from './reducers/cartItemReducer'

import wishListReducer from './reducers/wishListReducer'
import { WISH_LIST_ADD, WISH_LIST_REMOVE } from './reducers/wishListReducer'

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartItemReducer,
  wishList: wishListReducer,
})

console.log(reducer)

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.dispatch({type: CART_ADD_ITEM, payload: {productId: 1, quantity: 1}})
store.dispatch({type: CART_ADD_ITEM, payload: {productId: 10, quantity: 1}})
store.dispatch({type: CART_ADD_ITEM, payload: {productId: 13, quanti: 1}})
store.dispatch({type: CART_REMOVE_ITEM, payload: {productId: 13}})
store.dispatch({type: CART_INCREASE_BY, payload: {productId: 10}})
store.dispatch({type: CART_DECREASE_BY, payload: {productId: 10}})
store.dispatch({type: WISH_LIST_ADD, payload: {productId: 11}})
store.dispatch({type: WISH_LIST_ADD, payload: {productId: 16}})
store.dispatch({type: WISH_LIST_REMOVE, payload: {productId: 11}})