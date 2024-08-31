import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        list: []
    },
    reducers: {
        updateAllProducts(state, action) {
            state.loading = false
            state.list = action.payload 
            // return {loading: false, list: action.payload}
        },
        fetchProducts(state) {
            state.loading = true
            // return {...state, loading: true}
        }
    }
})

export const fetchInitialProducts = (dispatch) => {
    dispatch(fetchProducts())
    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
      dispatch(updateAllProducts(data))
    })
  }

export const {updateAllProducts, fetchProducts} = slice.actions

export default slice.reducer