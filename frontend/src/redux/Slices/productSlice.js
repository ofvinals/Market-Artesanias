import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    allProducts: [],
    filteredProducts: [],
    product: null,
    status: 'idle',
    error: null,
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await axios('http://localhost:3001/Producto')

    return response.data
})

export const getProductById = createAsyncThunk('products/getProductById', async (productId) => {
    const response = await axios(`http://localhost:3001/Producto/${productId}`)
    return response.data
})


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProductsByCategory: (state, action) => {
            if (action.payload === "") {
                state.filteredProducts = state.allProducts
            } else {
                state.filteredProducts = state.allProducts.filter(product => product.Category.Nombre.toLowerCase() === action.payload.toLowerCase())
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.allProducts = action.payload

            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.product = action.payload
            })
    }
})

export const {filterProductsByCategory} = productsSlice.actions


export default productsSlice.reducer