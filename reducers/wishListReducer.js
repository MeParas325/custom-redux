export const WISH_LIST_ADD = "wishList/addItem"
export const WISH_LIST_REMOVE = "wishList/removeItem"

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