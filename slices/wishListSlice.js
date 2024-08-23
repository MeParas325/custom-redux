export const WISH_LIST_ADD = "wishList/addItem"
export const WISH_LIST_REMOVE = "wishList/removeItem"

export function wishListAdd(productId) {
  return {type: WISH_LIST_ADD, payload: {productId}}
}

export function wishListRemove(productId) {
  return {type: WISH_LIST_REMOVE, payload: {productId}}
}

export default function wishListReducer(state = [], action) {
    switch (action.type) {
      case WISH_LIST_ADD:
        return [...state, action.payload]
      case WISH_LIST_REMOVE:
        return state.filter((wishListItem) => wishListItem.productId != action.payload.productId)
      default:
        return state
    }
}