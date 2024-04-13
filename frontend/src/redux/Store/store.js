import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../Reducer/auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
	key: 'auth',
	storage: storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
	},
});

export const persistor = persistStore(store);

export default store;
