
import { configureStore } from '@reduxjs/toolkit'; 
import { authReducer } from '../Reducer/auth';

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

export default store;
