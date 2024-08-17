export const CART_ADD_ITEM = "cart/addItem"
export const CART_REMOVE_ITEM = "cart/removeItem"
export const CART_INCREASE_BY = "cart/addBy"
export const CART_DECREASE_BY = "card/removeBy"

export default function cartItemReducer(state = [], action) {
    switch (action.type) {
      case CART_ADD_ITEM:
        return [...state, action.payload]
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
        case CART_DECREASE_BY:
          return state.map((cartItem) => {
              if(cartItem.productId == action.payload.productId) {
                const cart = {
                  ...cartItem,
                  quantity: cartItem.quantity - 1
                } 
                return cart
              } 
              return cartItem
            })
      default:
        return state
    }
}