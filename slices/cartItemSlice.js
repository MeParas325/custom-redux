import { produce } from "immer"

// actions
export const CART_ADD_ITEM = "cart/addItem"
export const CART_REMOVE_ITEM = "cart/removeItem"
export const CART_INCREASE_BY = "cart/addBy"
export const CART_DECREASE_BY = "card/removeBy"

// action listener
export function cartAddItem(product) {
  return { type: CART_ADD_ITEM, payload: product }
}

export function cartRemoveItem(productId) {
  return { type: CART_REMOVE_ITEM, payload: { productId } }
}

export function cartIncreasedBy(productId) {
  return { type: CART_INCREASE_BY, payload: { productId } }
}

export function cartDecreaseBy(productId) {
  return { type: CART_DECREASE_BY, payload: { productId } }
}

export default function cartItemReducer(originalState = [], action) {

  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex((cartItem) => cartItem.productId === action.payload.productId)

    switch (action.type) {

      case CART_ADD_ITEM:
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1
        }
        state.push({ ...action.payload, quantity: 1 })
        break

      case CART_REMOVE_ITEM:
        state.splice(existingItemIndex, 1)
        break

      case CART_INCREASE_BY:
        state[existingItemIndex].quantity += 1
        break
          
      case CART_DECREASE_BY:
        state[existingItemIndex].quantity -= 1
        if(state[existingItemIndex].quantity <= 0) state.splice(existingItemIndex, 1)
        break
    }

    return state
  })

}