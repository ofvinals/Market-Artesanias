import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL } from "../../api/apiURL";

const initialState = {
    items: [],
    purchases: [],
    status: 'idle',
    error: null
}

const token = localStorage.getItem('token');

export const addPurchase = createAsyncThunk('purchase/addPurchase', async (item) => {
    const response = await apiURL.post('/Transaccion', item, {
        headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // state.items.push(action.payload)
            const existingIndex = state.items.findIndex(item => item.Id === action.payload.Id);
            if (existingIndex >= 0) {
                state.items[existingIndex].cantidad = Math.min(
                    state.items[existingIndex].cantidad + 1,
                    state.items[existingIndex].Disponible
                )
            } else {
                state.items.push({ ...action.payload, cantidad: 1 });
            }
            console.log('productos agregados:',state.items);
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.Id !== action.payload)

        },
        increment(state, action) {
            const existingItem = state.items.find(item => item.Id === action.payload);
            if (existingItem && existingItem.cantidad < existingItem.Disponible) {
                existingItem.cantidad++;
            }
        },
        decrement(state, action) {
            const existingItem = state.items.find(item => item.Id === action.payload);
            if (existingItem && existingItem.cantidad > 0) {
                existingItem.cantidad--;
            }
        },
        clearCart(state) {
            state.items = []
        }

    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(addPurchase.pending, (state, action) => {
    //             state.status = 'loading'
    //         })
    //         .addCase(addPurchase.fulfilled, (state, action) => {
    //             state.status = 'succeeded'
    //             state.purchases = action.payload
    //             console.log(state.purchases);

    //         })
    //         .addCase(addPurchase.rejected, (state, action) => {
    //             state.status = 'failed'
    //             state.error = action.error.message
    //         })
    // }
})

export const { addItem, removeItem, clearCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer