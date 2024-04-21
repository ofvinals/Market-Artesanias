import { createSlice } from '@reduxjs/toolkit';

export const categoriaSlice = createSlice({
    name: 'categoria',
    initialState: {
        categoriaSeleccionada: ''
    },
    reducers: {
        setCategory: (state, action) => {
            state.categoriaSeleccionada = action.payload;
            console.log(state.categoriaSeleccionada);
        }
    },
});

export const { setCategory } = categoriaSlice.actions;

export default categoriaSlice.reducer;