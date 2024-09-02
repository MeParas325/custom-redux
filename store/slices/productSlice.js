import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchInitialProducts = createAsyncThunk("product/fetchProducts", async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        return response.json()
    } catch (error) {
        throw error
    }
})

const slice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        list: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInitialProducts.pending, (state) => {
            console.log("Pending state")
            state.loading = true 
        }).addCase(fetchInitialProducts.fulfilled, (state, action) => {
            console.log("Fulfilled state")
            state.loading = false
            state.list = action.payload
        }).addCase(fetchInitialProducts.rejected, (state, action) => {
            console.log("Rejected state")
            state.loading = false
            state.list = []
        })
    }
})

export default slice.reducer