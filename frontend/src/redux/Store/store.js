import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../Reducer/auth';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoriesReducer from '../Slices/categoriesSlice'
import productsReducer from '../Slices/productSlice'
import cartReducer from '../Slices/cartSlice'

const authPersistConfig = {
	key: 'auth',
	storage: storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		categoria: categoriesReducer,
		products: productsReducer,
		cart: cartReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
