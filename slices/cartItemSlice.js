import { createSlice } from "@reduxjs/toolkit"

const findItemIndex = (state, action) => state.findIndex((item) => item.productId === action.payload.productId)

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAddItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1
      }
      state.push({ ...action.payload, quantity: 1 })
    },
    cartRemoveItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      state.splice(existingItemIndex, 1)
    },
    cartIncreasedBy(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      state[existingItemIndex].quantity += 1
    },
    cartDecreaseBy(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      state[existingItemIndex].quantity -= 1
      if(state[existingItemIndex].quantity <= 0) state.splice(existingItemIndex, 1)
    }
  }
})

console.log(slice.actions.cartAddItem({name: "Tannu"}))

export const {
  cartAddItem,
  cartRemoveItem,
  cartDecreaseBy,
  cartIncreasedBy
} = slice.actions

export default slice.reducer