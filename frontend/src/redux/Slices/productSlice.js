import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiURL } from "../../api/apiURL";

const initialState = {
    allProducts: [],
    filteredProducts: [],
    product: {},
    status: 'idle',
    error: null,
}
const token = localStorage.getItem('token');

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await apiURL.get('/Producto', {
        headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
})

export const getProductById = createAsyncThunk('products/getProductById', async (productId) => {
    const response = await apiURL.get(`/Producto/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
    })
    console.log(response.data);
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
        },
        deleteDetail: (state, action) => {
            state.product = {}
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

export const { filterProductsByCategory, deleteDetail } = productsSlice.actions


export default productsSlice.reducer