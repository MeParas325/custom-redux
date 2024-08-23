// actions
export const CART_ADD_ITEM = "cart/addItem"
export const CART_REMOVE_ITEM = "cart/removeItem"
export const CART_INCREASE_BY = "cart/addBy"
export const CART_DECREASE_BY = "card/removeBy"

// action listener
export function cartAddItem(product) {
  return {type: CART_ADD_ITEM, payload: product}
}

export function cartRemoveItem(productId) {
  return {type: CART_REMOVE_ITEM, payload: {productId}}
}

export function cartIncreasedBy(productId) {
  return {type: CART_INCREASE_BY, payload: {productId}}
}

export function cartDecreaseBy(productId) {
  return {type: CART_DECREASE_BY, payload: {productId}}
}

export default function cartItemReducer(state = [], action) {
    switch (action.type) {
      case CART_ADD_ITEM:
        const existingItem = state.find((cartItem) => cartItem.productId === action.payload.productId)

        if(existingItem) {
          return state.map((cartItem) => {
            if(cartItem.productId === action.payload.productId) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            } else {
              return cartItem
            }
          })
        } else {
          return [...state, {...action.payload, quantity: 1}]
        }
      case CART_REMOVE_ITEM:
        return state.filter((cartItem) => cartItem.productId !== action.payload.productId)
      case CART_INCREASE_BY:
        return state.map((cartItem) => {
            if(cartItem.productId == action.payload.productId) {
              const cart = {
                ...cartItem,
                quantity: cartItem.quantity + 1
              }
              return cart
            } 
            return cartItem

          })
        case CART_INCREASE_BY:
          return state.map((cartItem) => {
            if(cartItem.productId == action.payload.productId) {
              const cart = {
                ...cartItem,
                quantity: cartItem.quantity + 1
              } 
              return cart
            } 
            return cartItem
          })
        case CART_DECREASE_BY:
          return state.map((cartItem) => {
              if(cartItem.productId == action.payload.productId) {
                const cart = {
                  ...cartItem,
                  quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : cartRemoveItem(cartItem.productId)
                } 
                return cart
              } 
              return cartItem
            }).filter((cartItem) => cartItem.quantity > 0)
      default:
        return state
    }
}